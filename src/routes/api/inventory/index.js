import express from "express";

import {
  getAllIngredients,
  getFilteredIngredients,
  getInventoryLog,
  getAllInventoryCategory,
  getIngredientByPk
} from "./inventory.controller";

const router = express.Router();

router.get("/allIngredient/departmentId/:departmentId", getAllIngredients);

router.get(
  "/departmentId/:departmentId/name/:nameFilter/categoryId/:categoryId",
  getFilteredIngredients
);

router.get("/ingredient/ingredientId/:ingredientId", getIngredientByPk);

router.get("/log/ingredientId/:ingredientId", getInventoryLog);

router.get("/allCategory/departmentId/:departmentId", getAllInventoryCategory);

export default router;
