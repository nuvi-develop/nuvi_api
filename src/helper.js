import { secret } from "@/config";
import crypto from "crypto";

export const encrypt = password => {
  const encryptedPassword = crypto
    .createHmac("sha1", secret)
    .update(password)
    .digest("base64");
  return encryptedPassword;
};
