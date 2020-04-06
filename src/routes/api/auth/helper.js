import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

import { secret, masterUser, google } from "config";
import {
  User,
  UserSocial,
  UserTraditional,
  Department
} from "@/sequelize/models";

const GOOGLE_CLIENT_ID = google.oAuthId;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

export const issueTokenToUser = user => {
  return new Promise((resolve, reject) => {
    // const userBasicData = {
    //   id: user.id,
    //   emailAddress: user.emailAddress,
    //   name: user.name,
    //   isAdmin: user.isAdmin,
    //   point: user.point,
    //   approved: user.approved,
    //   DepartmentId: user.DepartmentId
    // };
    jwt.sign(
      { ...user },
      secret,
      { expiresIn: "7d", issuer: "youngjin-ha", subject: "userInfo" },
      (err, token) => {
        if (err) reject(err);
        resolve({ ...user, token });
      }
    );
  });
};

export const checkMaster = ({ emailAddress, password }) => {
  if (emailAddress === masterUser.emailAddress) {
    if (password === masterUser.password) {
      const masterUser = {
        id: "master",
        emailAddress,
        name: "master",
        isAdmin: true,
        point: 0,
        type: "master",
        approved: true,
        DepartmentId: 0,
        Department: { name: "master", logo: null }
      };
      return masterUser;
    } else {
      const error = new Error("마스터 계정 비밀번호가 틀립니다.");
      error.status = 409;
      throw error;
    }
  }
  return false;
};

export const checkUserIsSocial = async user => {
  if (user.type === "social") {
    const socialUser = await UserSocial.findByPk(user.id);
    const { providerType } = socialUser;
    const CapitalProviderType =
      providerType.charAt(0).toUpperCase() + providerType.slice(1);
    const error = new Error(
      `${CapitalProviderType} 로 가입된 아이디 입니다. ${CapitalProviderType} 로그인 해주세요.`
    );
    error.status = 409;
    throw error;
  }
};

export const checkUserEmail = async emailAddress => {
  const user = await User.findOne({
    where: { emailAddress },
    include: { model: UserTraditional, attributes: ["password"] }
  });
  if (user) {
    return user;
  } else {
    const error = new Error("등록된 이메일이 아닙니다.");
    error.status = 409;
    throw error;
  }
};

export const checkUserPassword = ({ userWithPassword, password }) => {
  const encryptedPassword = userWithPassword.UserTraditional.password;
  const isCorrectPassword = UserTraditional.verify(password, encryptedPassword);
  if (isCorrectPassword) {
    return userWithPassword;
  } else {
    const error = new Error("비밀번호가 맞지 않습니다.");
    error.status = 409;
    throw error;
  }
};

export const getUserWithEmail = async emailAddress => {
  const userObj = await User.findOne({
    where: { emailAddress },
    include: { model: Department, attributes: ["name", "logo"] }
  });
  return userObj ? userObj.dataValues : null;
};

export const verifyTokenWithGoogle = async token => {
  const login = await client.verifyIdToken({
    idToken: token,
    audience: GOOGLE_CLIENT_ID
  });
  const payload = login.getPayload();
  const audience = payload.aud;
  // 토큰 인증
  if (audience !== GOOGLE_CLIENT_ID) {
    const error = new Error("등록된 Google 유저가 아닙니다.");
    error.status = 409;
    throw error;
  }
  // 유저 프로필 받아옴
  const userPayloadData = {
    name: payload["name"],
    pic: payload["picture"],
    id: payload["sub"],
    email_verified: payload["email_verified"],
    emailAddress: payload["email"]
  };
  return userPayloadData;
};

export const isItUniqueEmail = async emailAddress => {
  const foundUser = await User.findOne({
    where: { emailAddress }
  });
  if (foundUser) {
    const error = new Error("Email exists!");
    error.status = 409;
    throw error;
  }
};
