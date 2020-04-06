"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      emailAddress: { type: DataTypes.STRING, allowNull: false },
      name: DataTypes.STRING,
      isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false },
      point: { type: DataTypes.INTEGER, defaultValue: 0 },
      type: DataTypes.STRING,
      approved: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {}
  );
  User.associate = function(models) {
    User.belongsTo(models.Department, { foreignKey: "DepartmentId" });

    User.hasMany(models.Plate, { foreignKey: "nuvi_user_id" });
    User.hasMany(models.PlateWaste, { foreignKey: "nuvi_user_id" });
    User.hasOne(models.PersonalInfo, {
      foreignKey: "nuvi_user_id",
      onDelete: "cascade"
    });
    User.hasOne(models.UserTraditional, {
      foreignKey: "nuvi_user_id",
      onDelete: "cascade"
    });
    User.hasOne(models.UserSocial, {
      foreignKey: "nuvi_user_id",
      onDelete: "cascade"
    });
    User.hasMany(models.PersonalInfoLog, {
      foreignKey: "nuvi_user_id",
      onDelete: "cascade"
    });
  };

  return User;
};
