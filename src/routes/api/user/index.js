import express from "express";

import {
  waitingAdmin,
  adminList,
  deleteUser,
  toggleApproved,
  me
} from "./user.controller";

const router = express.Router();

router.get("/waitingAdmin", waitingAdmin);
router.get("/adminList", adminList);
router.get("/me", me);
router.delete("/:userId", deleteUser);
router.put("/toggleApproved/:userId", toggleApproved);

export default router;
