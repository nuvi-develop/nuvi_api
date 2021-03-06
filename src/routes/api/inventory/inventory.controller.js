import { Op } from "sequelize";
import produce from "immer";
import { add } from "date-fns";

import {
  InventoryCategory,
  InventoryIngredient,
  InventoryLog,
  IngredientUnit
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

    include: [
      {
        model: InventoryLog,
        attributes: [
          [sequelize.fn("sum", sequelize.col("stock_delta")), "currentStock"]
        ]
      },
      InventoryCategory,
      IngredientUnit
    ]
  });

  res.json(ingredientRes);
});

export const getIngredientLogsByPk = wrapperAsync(async (req, res) => {
  const { ingredientId } = req.params;
  const { limit, offset } = req.query;

  const ingredientLogRes = await InventoryLog.findAll({
    where: {
      InventoryIngredientId: ingredientId,
      [Op.not]: { [Op.and]: [{ order: 0 }, { use: 0 }] }
    },
    limit: limit ? +limit : null,
    order: [["recordDate", "DESC"]],
    offset: offset ? +offset : 0
  });
  const recentDate = ingredientLogRes?.[0]?.recentDate;

  res.json(ingredientLogRes);
});

export const getIngredientCurrentStock = wrapperAsync(async (req, res) => {
  const { recordDate, ingredientId } = req.params;
  // const currentTimezoneOffset = new Date().getTimezoneOffset();
  //new Date 시 utc 로 변환이 일어나는 것을 상쇄시킴.
  // const date = add(new Date(recordDate), { minutes: -currentTimezoneOffset });
  const date = new Date(recordDate);

  const ingredientInventoryLog = await InventoryLog.findAll({
    where: {
      recordDate: { [Op.lte]: date },
      InventoryIngredientId: ingredientId
    }
  });

  const currentStock = await InventoryLog.sum("stock_delta", {
    where: {
      recordDate: { [Op.lte]: date },
      InventoryIngredientId: ingredientId
    }
  });

  res.json({ currentStock, ingredientInventoryLog });
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

export const getAllUnits = wrapperAsync(async (req, res) => {
  const units = await IngredientUnit.findAll();
  res.json(units);
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
        include: [
          {
            model: InventoryLog,
            attributes: {
              include: [
                [
                  sequelize.fn("sum", sequelize.col("stock_delta")),

                  "currentStock"
                ]
              ]
            },
            limit: 1,
            order: [["created_at", "DESC"]]
          },
          IngredientUnit
        ]
      });

      // const ingredientsWithLog = await Promise.all(
      //   ingredients.map(async ingredient => {
      //     const ingredientLogs = await ingredient.getInventoryLogs();
      //     console.log("ingredientLogs", ingredientLogs);
      //     const ingredientWithLog = {
      //       ...ingredient,
      //       ingredientLogs
      //     };
      //     return ingredientWithLog;
      //   })
      // );

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
  // TODO 재료만들때 초기LOG 생성하던것 지우기 (stock 표시해주려고 했던것임)
  // 여전히 넣어야 할듯..
  const ingredientLogObj = await InventoryLog.create({
    recordDate: new Date(),
    order: 0,
    use: 0,
    stockDelta: 0,
    cost: 0,
    InventoryIngredientId: createdIngredientId
  });
  const createdIngredientLog = ingredientLogObj.dataValues;
  res.json({ createdIngredient });
});

export const editIngredientLog = wrapperAsync(async (req, res) => {
  const { editLogInfo } = req.body;
  const { name, oldValue, newValue, logId } = editLogInfo;
  const deltaAdjustment = {
    order: +newValue - oldValue,
    use: +oldValue - newValue,
    cost: 0
  };

  const inventoryLogToUpdate = await InventoryLog.findByPk(logId);
  const oldStockDelta = inventoryLogToUpdate.dataValues.stockDelta;
  const editedObject = await inventoryLogToUpdate.update({
    [name]: newValue,
    stockDelta: oldStockDelta + deltaAdjustment[name]
  });
  const editedLog = editedObject.dataValues;
  res.json({ editedLog });
});

export const deleteIngredientLog = wrapperAsync(async (req, res) => {
  const { ingredientLogId } = req.params;

  const deletedIngrediengLog = await InventoryLog.destroy({
    where: { id: ingredientLogId }
  });

  res.json(deletedIngrediengLog);
});

export const deleteIngredient = wrapperAsync(async (req, res) => {
  const { ingredientId } = req.params;

  const deletedIngredient = await InventoryIngredient.destroy({
    where: { id: ingredientId }
  });
  res.json(deletedIngredient);
});

export const isSameIngredient = wrapperAsync(async (req, res) => {
  const { ingredientName } = req.query;
  const ingredient = await InventoryIngredient.findOne({
    where: { name: ingredientName }
  });
  if (ingredient) {
    res.json(true);
  } else {
    res.json(false);
  }
});

export const editIngredientOrder = wrapperAsync(async (req, res) => {
  const { movingInfo } = req.body;
  const { movingIngredientId, newOrder } = movingInfo;
  console.log("movingInfo", movingInfo);
  const editedIngredient = await InventoryIngredient.update(
    {
      order: newOrder
    },
    {
      where: {
        id: movingIngredientId
      }
    }
  );
  res.json({ editedIngredient });
});
