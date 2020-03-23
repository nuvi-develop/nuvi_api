"use strict";
module.exports = (sequelize, DataTypes) => {
  const ExpectEatNumber = sequelize.define(
    "ExpectEatNumber",
    {
      expect_date: DataTypes.DATEONLY,
      bld: DataTypes.CHAR(1),
      min: DataTypes.SMALLINT.UNSIGNED,
      max: DataTypes.SMALLINT.UNSIGNED,
      real: DataTypes.SMALLINT.UNSIGNED
    },
    {}
  );
  ExpectEatNumber.associate = function(models) {
    ExpectEatNumber.belongsTo(models.Food);
    ExpectEatNumber.belongsTo(models.Department);
  };
  return ExpectEatNumber;
};
