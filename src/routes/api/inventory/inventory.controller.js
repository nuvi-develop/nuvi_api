import { Op } from "sequelize";
import produce from "immer";

import {
  InventoryCategory,
  InventoryIngredient,
  InventoryLog
} from "@/sequelize/models";

import { wrapperAsync } from "@/routes/api/helper";
import { sequelize } from "../../../sequelize/models";

export const getAllIngredients = wrapperAsync(async (req, res) => {
  const { departmentId } = req.params;
  const { limit } = req.query;
  const ingredients = await InventoryIngredient.findAll({
    where: { DepartmentId: departmentId },
    limit: limit ? +limit : null
  });
  res.json(ingredients);
});

export const getFilteredIngredients = wrapperAsync(async (req, res) => {
  const { departmentId, nameFilter, categoryId } = req.params;
  const { limit } = req.query;
  const ingredients = await InventoryIngredient.findAll({
    where: {
      DepartmentId: departmentId,
      name:
        nameFilter === " "
          ? { [Op.not]: null }
          : { [Op.substring]: decodeURI(nameFilter) },
      InventoryCategoryId:
        categoryId === "all" ? { [Op.not]: null } : categoryId
    },
    include: { model: InventoryCategory, attributes: ["name"] },
    limit: limit ? +limit : null
  });

  res.json(ingredients);
});

export const getIngredientByPk = wrapperAsync(async (req, res) => {
  const { ingredientId } = req.params;

  const ingredientRes = await InventoryIngredient.findOne({
    where: { id: ingredientId },
    include: [InventoryCategory]
  });

  res.json(ingredientRes);
});

export const getIngredientLogsByPk = wrapperAsync(async (req, res) => {
  const { ingredientId } = req.params;
  const { limit, offset } = req.query;

  const ingredientLogRes = await InventoryLog.findAll({
    where: { InventoryIngredientId: ingredientId },
    limit: limit ? +limit : null,
    order: [["created_at", "DESC"]],
    offset: offset ? +offset : 0
  });

  res.json(ingredientLogRes);
});

export const getIngredientRecentLogByPk = wrapperAsync(async (req, res) => {
  const { ingredientId } = req.params;

  const ingredientRecentLogRes = await InventoryLog.findAll({
    where: { InventoryIngredientId: ingredientId },
    limit: 1,
    order: [["created_at", "DESC"]]
  });

  res.json(ingredientRecentLogRes?.[0]);
});

export const getAllInventoryCategory = wrapperAsync(async (req, res) => {
  const { departmentId } = req.params;
  const { limit } = req.query;
  const categories = await InventoryCategory.findAll({
    where: { DepartmentId: departmentId },
    attributes: ["id", "name"],
    limit: limit ? +limit : null
  });
  res.json(categories);
});
