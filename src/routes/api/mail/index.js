import express from "express";

import { updatePassword } from "./mail.controller";

const router = express.Router();

router.post("/updatePassword", updatePassword);

export default router;
