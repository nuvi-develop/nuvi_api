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
        beforeCreate: (user, options) => {
          const orderNumber = user.id * 10;
          user.order = orderNumber;
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
