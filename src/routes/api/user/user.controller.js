import { User, UserTraditional, Department } from "@/sequelize/models";
import jwt from "jsonwebtoken";

import { secret } from "@/config";
import { wrapperAsync } from "@/routes/api/helper";
import { encrypt } from "@/helper";

export const waitingAdmin = wrapperAsync(async (req, res, next) => {
  const waitingAdmins = await User.findAll({
    where: { isAdmin: true, approved: false },
    include: { model: Department, attributes: ["name"] }
  });
  res.json(waitingAdmins);
});

export const adminList = wrapperAsync(async (req, res, next) => {
  const admins = await User.findAll({
    where: { isAdmin: true, approved: true },
    include: { model: Department, attributes: ["name"] }
  });
  res.json(admins);
});

export const deleteUser = wrapperAsync(async (req, res, next) => {
  const { userId } = req.params;
  const deleteUser = await User.destroy({
    where: { id: userId }
  });
  res.json(deleteUser);
});

export const giveTempPassword = wrapperAsync(async (req, res, next) => {
  const { emailAddress, tempPassword } = req.body;
  const encrptedNewPassword = encrypt("" + tempPassword);
  const user = await User.findOne({ where: { emailAddress } });
  await UserTraditional.update(
    { password: encrptedNewPassword },
    { where: { nuvi_user_id: user.id } }
  );
  res.json(user);
});

export const updatePassword = wrapperAsync(async (req, res, next) => {
  const { userId, password, newPassword } = req.body;
  console.log("userId", userId);

  const user = await UserTraditional.findOne({
    where: { nuvi_user_id: userId }
  });
  console.log("came here");
  const isCorrectPassword = UserTraditional.verify(password, user.password);
  if (isCorrectPassword) {
    user.password = encrypt(newPassword);
    await user.save();
  } else {
    const error = new Error("기존 비밀번호가 맞지 않습니다.");
    error.status = 409;
    throw error;
  }

  res.status(200).end();
});

export const toggleApproved = wrapperAsync(async (req, res, next) => {
  const { userId } = req.params;
  const user = await User.findByPk(userId);
  user.approved = !user.approved;
  await user.save();

  res.json(user);
});

export const me = wrapperAsync(async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    throw new Error("Not logged in!");
  }
  const decoded = jwt.verify(token, secret);

  res.json(decoded);
});
