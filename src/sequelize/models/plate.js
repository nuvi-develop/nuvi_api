"use strict";
module.exports = (sequelize, DataTypes) => {
  const Plate = sequelize.define(
    "Plate",
    {
      eatingDate: DataTypes.DATEONLY,
      bld: DataTypes.CHAR(1),
      pictureIn: DataTypes.STRING,
      pictureOut: DataTypes.STRING,
      satisfaction: DataTypes.INTEGER.UNSIGNED,
      platePoint: DataTypes.INTEGER.UNSIGNED,
      timeIn: DataTypes.TIME,
      timeOut: DataTypes.TIME
    },
    {
      indexes: [
        { name: "eat-time", fields: ["eating_date", "bld", "department_id"] }
      ]
    }
  );
  Plate.associate = function(models) {
    Plate.belongsTo(models.Kiosk, { as: "kiosk_in" });
    Plate.belongsTo(models.Kiosk, { as: "kiosk_out" });
    Plate.belongsTo(models.User, { foreignKey: "nuvi_user_id" });
    Plate.belongsTo(models.Department);

    Plate.hasMany(models.PlateWaste);
  };
  return Plate;
};
