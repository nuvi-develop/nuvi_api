import jwt from "jsonwebtoken";

import { wrapperAsync } from "@/routes/api/helper";
import { secret } from "@/config";

export const authMiddleware = wrapperAsync(async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    const error = new Error("Not logged in!");
    error.status = 403;
    throw error;
  }
  const decoded = jwt.verify(token, secret);

  req.decoded = decoded;
  next();
});
