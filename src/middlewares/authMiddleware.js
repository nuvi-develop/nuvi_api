import jwt from "jsonwebtoken";

import { wrapperAsync } from "@/routes/api/helper";
import { secret } from "@/config";

export const authMiddleware = wrapperAsync(async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    throw new Error("Not logged in!");
  }
  const decoded = jwt.verify(token, secret);

  req.decoded = decoded;
  next();
});
