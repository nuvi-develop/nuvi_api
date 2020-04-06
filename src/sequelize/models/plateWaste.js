"use strict";
module.exports = (sequelize, DataTypes) => {
  const PlateWaste = sequelize.define(
    "PlateWaste",
    {
      eatingDate: DataTypes.DATEONLY,
      bld: DataTypes.STRING(1),
      eatingTime: DataTypes.TIME,
      volumeServed: DataTypes.FLOAT,
      volumeLeft: DataTypes.FLOAT
    },
    {
      underscored: true
    }
  );
  PlateWaste.associate = function(models) {
    PlateWaste.belongsTo(models.Food);
    PlateWaste.belongsTo(models.Plate);
    PlateWaste.belongsTo(models.Department);
    PlateWaste.belongsTo(models.User, { foreignKey: "nuvi_user_id" });
  };
  return PlateWaste;
};
