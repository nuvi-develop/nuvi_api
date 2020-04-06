import { User, Department } from "@/sequelize/models";
import jwt from "jsonwebtoken";

import { secret } from "@/config";
import { wrapperAsync } from "@/routes/api/helper";

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
