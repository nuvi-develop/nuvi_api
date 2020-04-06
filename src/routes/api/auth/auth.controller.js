import {
  User,
  UserTraditional,
  UserSocial,
  Department
} from "@/sequelize/models";
import { encrypt } from "helper";
import {
  issueTokenToUser,
  checkMaster,
  checkUserIsSocial,
  checkUserEmail,
  checkUserPassword,
  getUserWithEmail,
  verifyTokenWithGoogle,
  isItUniqueEmail
} from "./helper";
import { wrapperAsync } from "@/routes/api/helper";

export const loginTraditional = wrapperAsync(async (req, res, next) => {
  const userInfo = req.body;
  const { emailAddress, password, isAdmin } = userInfo;

  const makeUserWithToken = async () => {
    const masterUser = checkMaster({ emailAddress, password });
    if (masterUser) return await issueTokenToUser(masterUser);

    const userWithPassword = await checkUserEmail(emailAddress);
    await checkUserIsSocial(userWithPassword);
    const correctPasswordUser = await checkUserPassword({
      userWithPassword,
      password
    });
    if (correctPasswordUser) {
      const user = await getUserWithEmail(correctPasswordUser.emailAddress);
      return await issueTokenToUser(user);
    }
  };
  const userWithToken = await makeUserWithToken();
  res.json(userWithToken);
});

export const loginSocial = wrapperAsync(async (req, res, next) => {
  const { token } = req.body;

  const userGoogleData = await verifyTokenWithGoogle(token);
  console.log("userGoogleData", userGoogleData);
  const { emailAddress } = userGoogleData;
  const user = await getUserWithEmail(emailAddress);
  if (user) {
    const userWithToken = await issueTokenToUser(user);
    res.json(userWithToken);
  } else {
    res.json(userGoogleData);
  }
});

export const registerTraditional = wrapperAsync(async (req, res, next) => {
  const user = req.body;
  const { emailAddress } = user;

  await isItUniqueEmail(emailAddress);

  const userObj = await User.create({
    emailAddress: user.emailAddress,
    name: user.name,
    isAdmin: user.isAdmin ? user.isAdmin : false,
    point: user.point ? user.point : 0,
    type: "traditional",
    DepartmentId: +user.DepartmentId
  });

  const userData = userObj.dataValues;
  const { id } = userData;
  const { password } = user;
  const encryptedPassword = encrypt(password);
  await UserTraditional.create({
    nuvi_user_id: id,
    password: encryptedPassword
  });

  res.json(userData);
});

export const registerSocial = wrapperAsync(async (req, res, next) => {
  const user = req.body;

  const userObj = await User.create({
    emailAddress: user.emailAddress,
    name: user.name,
    isAdmin: user.isAdmin ? user.isAdmin : false,
    point: user.point ? user.point : 0,
    type: "social",
    DepartmentId: +user.DepartmentId
  });
  const userData = userObj.dataValues;
  const { id } = userData;
  await UserSocial.create({
    nuvi_user_id: id,
    providerType: user.providerType,
    providerKey: user.providerKey
  });

  res.json(userData);
});

export const checkEmail = wrapperAsync(async (req, res, next) => {
  const { emailAddress } = req.body;
  const user = await User.findOne({ where: { emailAddress } });
  if (user) {
    res.json(true);
  } else {
    res.json(false);
  }
});
