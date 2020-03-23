"use strict";
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define(
    "Department",
    {
      id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      logo: DataTypes.STRING,
      region: DataTypes.STRING,
      type: DataTypes.STRING,
      total_number: DataTypes.INTEGER
    },
    {}
  );
  Department.associate = function(models) {
    Department.hasMany(models.User);
    Department.hasMany(models.Plate);
    Department.hasMany(models.PlateWaste);
    Department.hasMany(models.OverMadeWaste);
    Department.hasMany(models.KitchenWaste);
    Department.hasMany(models.Kiosk);
    Department.hasMany(models.ExpectEatVolume);
    Department.hasMany(models.ExpectEatNumber);
    Department.hasMany(models.MenuList);
  };
  return Department;
};
