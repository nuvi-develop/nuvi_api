import express from "express";

import {
  registerTraditional,
  registerSocial,
  loginTraditional,
  loginSocial,
  checkEmail
} from "./auth.controller";

const router = express.Router();

router.post("/loginTraditional", loginTraditional);
router.post("/loginSocial", loginSocial);
router.post("/registerTraditional", registerTraditional);
router.post("/registerSocial", registerSocial);
router.post("/checkEmail", checkEmail);

export default router;
