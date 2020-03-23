"use strict";
module.exports = (sequelize, DataTypes) => {
  const MenuFoodJunction = sequelize.define(
    "MenuFoodJunction",
    {},
    {
      timestamps: false
    }
  );
  MenuFoodJunction.associate = function(models) {};
  return MenuFoodJunction;
};
