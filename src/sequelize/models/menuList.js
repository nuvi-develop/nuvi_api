"use strict";
module.exports = (sequelize, DataTypes) => {
  const MenuList = sequelize.define(
    "MenuList",
    {
      menu_date: DataTypes.DATEONLY,
      bld: DataTypes.CHAR(1)
    },
    {}
  );
  MenuList.associate = function(models) {
    MenuList.belongsTo(models.Department);
    MenuList.belongsToMany(models.Food, { through: models.MenuFoodJunction });
  };
  return MenuList;
};
