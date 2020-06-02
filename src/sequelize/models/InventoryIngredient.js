"use strict";
module.exports = (sequelize, DataTypes) => {
  const InventoryIngredient = sequelize.define(
    "InventoryIngredient",
    {
      name: DataTypes.STRING
    },
    {}
  );
  InventoryIngredient.associate = function(models) {
    InventoryIngredient.belongsTo(models.InventoryCategory);
    InventoryIngredient.belongsTo(models.Department);
    InventoryIngredient.hasMany(models.InventoryLog);
  };
  return InventoryIngredient;
};
