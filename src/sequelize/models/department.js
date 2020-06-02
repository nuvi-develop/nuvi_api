"use strict";
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define(
    "Department",
    {
      name: DataTypes.STRING,
      logo: DataTypes.STRING,
      region: DataTypes.STRING,
      type: DataTypes.STRING,
      totalNumber: DataTypes.INTEGER
    },
    {}
  );
  Department.associate = function(models) {
    Department.hasMany(models.User, { foreignKey: "DepartmentId" });
    Department.hasMany(models.Plate);
    Department.hasMany(models.PlateWaste);
    Department.hasMany(models.OverMadeWaste);
    Department.hasMany(models.KitchenWaste);
    Department.hasMany(models.Kiosk);
    Department.hasMany(models.ExpectEatVolume);
    Department.hasMany(models.ExpectEatNumber);
    Department.hasMany(models.MenuList);
    Department.hasMany(models.OrgFilter);
    Department.hasMany(models.InventoryCategory);
  };
  return Department;
};
