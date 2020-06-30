"use strict";
module.exports = (sequelize, DataTypes) => {
  const IngredientUnit = sequelize.define(
    "IngredientUnit",
    {
      name: DataTypes.STRING
    },
    {}
  );
  IngredientUnit.associate = function(models) {
    IngredientUnit.hasMany(models.InventoryIngredient);
  };
  return IngredientUnit;
};
