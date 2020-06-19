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
  addIngredientLog,
  editIngredientLog,
  getIngredientCurrentStock,
  deleteIngredientLog,
  deleteIngredient,
  isSameIngredient
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

router.get(
  "/ingredientCurrentStock/ingredientId/:ingredientId/recordDate/:recordDate",
  getIngredientCurrentStock
);

router.post("/ingredientLog", addIngredientLog);
router.post("/ingredient", addIngredient);
router.patch("/ingredientLog", editIngredientLog);

router.delete(
  "/ingredientLog/ingredientLogId/:ingredientLogId",
  deleteIngredientLog
);

router.delete("/ingredient/ingredientId/:ingredientId", deleteIngredient);

router.get("/isSame/ingredientName", isSameIngredient);

export default router;
