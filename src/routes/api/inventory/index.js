import express from "express";

import {
  getAllIngredients,
  getFilteredIngredients,
  getInventoryLog,
  getAllInventoryCategory,
  getIngredientByPk,
  getIngredientLogsByPk,
  getIngredientRecentLogByPk,
  getIngredientsOfCategories,
  addIngredient,
  addIngredientLog
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

router.get(
  "/ingredientsOfCategories/departmentId/:departmentId/name/:nameFilter",
  getIngredientsOfCategories
);

router.post("/ingredientLog", addIngredientLog);
router.post("/ingredient", addIngredient);

export default router;
