import { Op } from "sequelize";

import {
  InventoryCategory,
  InventoryIngredient,
  InventoryLog
} from "@/sequelize/models";

import { wrapperAsync } from "@/routes/api/helper";

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
  const { limit } = req.query;
  const ingredient = await InventoryIngredient.findOne({
    where: { id: ingredientId },
    include: [
      { model: InventoryLog, limit: limit ? +limit : null },
      InventoryCategory
    ]
  });
  res.json(ingredient);
});

export const getInventoryLog = wrapperAsync(async (req, res) => {
  const { ingredientId } = req.params;
  const { limit } = req.query;
  const inventoryLogs = await InventoryLog.findAll({
    where: {
      InventoryIngredientId: ingredientId
    },
    limit: limit ? +limit : null
  });
  res.json(inventoryLogs);
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
