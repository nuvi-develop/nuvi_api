import express from "express";

import auth from "./auth";
import department from "./department";
import user from "./user";
import mail from "./mail";

const router = express.Router();

router.use("/auth", auth);
router.use("/department", department);
router.use("/user", user);
router.use("/mail", mail);

export default router;
