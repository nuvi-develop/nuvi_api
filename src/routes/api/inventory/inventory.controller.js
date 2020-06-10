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
          : { [Op.substring]: nameFilter },
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
    order: [["recordDate", "DESC"]],
    offset: offset ? +offset : 0
  });

  res.json(ingredientLogRes);
});

export const getIngredientRecentLogByPk = wrapperAsync(async (req, res) => {
  const { ingredientId } = req.params;

  const ingredientRecentLogRes = await InventoryLog.findAll({
    where: { InventoryIngredientId: ingredientId },
    limit: 1,
    order: [["recordDate", "DESC"]]
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

export const getIngredientsOfCategories = wrapperAsync(async (req, res) => {
  const { departmentId, nameFilter } = req.params;
  const { limit, offset } = req.query;
  const categories = await InventoryCategory.findAll({
    where: {
      DepartmentId: departmentId
    },
    attributes: ["id", "name"],
    limit: limit ? +limit : null,
    offset: offset ? +offset : 0
  });

  const ingredientsOfCategories = await Promise.all(
    categories.map(async category => {
      const ingredients = await category.getInventoryIngredients({
        where: {
          name:
            nameFilter === " "
              ? { [Op.not]: null }
              : { [Op.substring]: nameFilter }
        },
        include: {
          model: InventoryLog,
          limit: 1,
          order: [["created_at", "DESC"]]
        }
      });
      return {
        category: category,
        ingredients
      };
    })
  );
  res.json(ingredientsOfCategories);
});

export const addIngredientLog = wrapperAsync(async (req, res) => {
  const { ingredientLogInfo } = req.body;
  const inventoryLogObj = await InventoryLog.create(ingredientLogInfo);
  const createdInventoryLog = inventoryLogObj.dataValues;
  res.json(createdInventoryLog);
});
export const addIngredient = wrapperAsync(async (req, res) => {
  const { ingredientInfo } = req.body;
  const ingredientObj = await InventoryIngredient.create(ingredientInfo);
  const createdIngredient = ingredientObj.dataValues;
  const createdIngredientId = createdIngredient.id;
  const ingredientLogObj = await InventoryLog.create({
    recordDate: new Date(),
    order: 0,
    use: 0,
    stock: 0,
    cost: 0,
    InventoryIngredientId: createdIngredientId
  });
  const createdIngredientLog = ingredientLogObj.dataValues;
  res.json({ createdIngredient, createdIngredientLog });
});

export const editIngredientLog = wrapperAsync(async (req, res) => {
  const { editLogInfo } = req.body;
  const { name, oldValue, newValue, logId } = editLogInfo;
  console.log("editLogInfo", editLogInfo);
  res.json();
});
