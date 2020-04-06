import express from "express";

import { list } from "./department.controller";

const router = express.Router();

router.get("/list", list);

export default router;
