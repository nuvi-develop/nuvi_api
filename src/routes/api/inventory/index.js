import express from "express";

import {
  getAllIngredients,
  getFilteredIngredients,
  getInventoryLog,
  getAllInventoryCategory,
  getIngredientByPk,
  getIngredientLogsByPk,
  getIngredientRecentLogByPk
} from "./inventory.controller";

const router = express.Router();

router.get("/allIngredient/departmentId/:departmentId", getAllIngredients);

router.get(
  "/departmentId/:departmentId/name/:nameFilter/categoryId/:categoryId",
  getFilteredIngredients
);

router.get("/ingredient/ingredientId/:ingredientId", getIngredientByPk);
router.get("/ingredientLogs/ingredientId/:ingredientId", getIngredientLogsByPk);
router.get(
  "/ingredientRecentLog/ingredientId/:ingredientId",
  getIngredientRecentLogByPk
);

router.get("/allCategory/departmentId/:departmentId", getAllInventoryCategory);

export default router;
