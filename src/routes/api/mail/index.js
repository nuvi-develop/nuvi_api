import express from "express";

import { sendTempPassword } from "./mail.controller";

const router = express.Router();

router.post("/sendTempPassword", sendTempPassword);

export default router;
