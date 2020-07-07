import dotenv from "dotenv";

dotenv.config();

export const secret = process.env.SECRET_KEY;

export const masterUser = {
  emailAddress: process.env.MASTER_USER_EMAIL_ADDRESS,
  password: process.env.MASTER_USER_PASSWORD
};

export const google = {
  oAuthId: process.env.GOOGLE_AUTH_ID,
  oAuthCredential: process.env.GOOGLE_OAUTH_CREDENTIAL
};

export const mailInfo = {
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASS
};

export const awsPhotoUrl = process.env.AWS_PHOTO_URL;
