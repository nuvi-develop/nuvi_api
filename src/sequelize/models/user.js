"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      point: DataTypes.INTEGER
    },
    {}
  );
  User.associate = function(models) {
    User.belongsTo(models.Department);

    User.hasMany(models.Plate, { foreignKey: "nuvi_user_id" });
    User.hasMany(models.PlateWaste, { foreignKey: "nuvi_user_id" });
    User.hasOne(models.PersonalInfo, { foreignKey: "nuvi_user_id" });
    User.hasMany(models.PersonalInfoLog, { foreignKey: "nuvi_user_id" });
  };
  return User;
};
