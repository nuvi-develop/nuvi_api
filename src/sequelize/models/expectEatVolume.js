"use strict";
module.exports = (sequelize, DataTypes) => {
  const ExpectEatVolume = sequelize.define(
    "ExpectEatVolume",
    {
      expect_date: DataTypes.DATEONLY,
      bld: DataTypes.CHAR(1),
      expectVolume: DataTypes.SMALLINT.UNSIGNED,
      realVolume: DataTypes.SMALLINT.UNSIGNED
    },
    {}
  );
  ExpectEatVolume.associate = function(models) {
    ExpectEatVolume.belongsTo(models.Food);
    ExpectEatVolume.belongsTo(models.Department);
  };
  return ExpectEatVolume;
};
