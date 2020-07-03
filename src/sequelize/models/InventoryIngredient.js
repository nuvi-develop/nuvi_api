"use strict";
module.exports = (sequelize, DataTypes) => {
  const InventoryIngredient = sequelize.define(
    "InventoryIngredient",
    {
      name: DataTypes.STRING,
      order: DataTypes.FLOAT
    },
    {
      hooks: {
        afterCreate: async (ingredient, options) => {
          console.log("ingredient", ingredient);
          console.log("options", options);
          const orderNumber = ingredient.dataValues.id * 10;

          await ingredient.update({ order: orderNumber });
        }
      }
    }
  );
  InventoryIngredient.associate = function(models) {
    InventoryIngredient.belongsTo(models.InventoryCategory);
    InventoryIngredient.belongsTo(models.Department);
    InventoryIngredient.hasMany(models.InventoryLog);
    InventoryIngredient.belongsTo(models.IngredientUnit);
  };
  return InventoryIngredient;
};
