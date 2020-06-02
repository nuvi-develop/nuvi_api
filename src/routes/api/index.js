import express from "express";

import auth from "./auth";
import department from "./department";
import user from "./user";
import mail from "./mail";
import inventory from "./inventory";

const router = express.Router();

router.use("/auth", auth);
router.use("/department", department);
router.use("/user", user);
router.use("/mail", mail);
router.use("/inventory", inventory);

export default router;
