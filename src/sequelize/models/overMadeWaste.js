"use strict";
module.exports = (sequelize, DataTypes) => {
  const OverMadeWaste = sequelize.define(
    "OverMadeWaste",
    {
      eatdate: DataTypes.DATEONLY,
      bld: DataTypes.BOOLEAN,
      volume: DataTypes.FLOAT,
      picureName: DataTypes.STRING
    },
    {}
  );
  OverMadeWaste.associate = function(models) {
    OverMadeWaste.belongsTo(models.Food);
    OverMadeWaste.belongsTo(models.Department);
  };
  return OverMadeWaste;
};
