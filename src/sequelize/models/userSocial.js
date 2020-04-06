"use strict";
module.exports = (sequelize, DataTypes) => {
  const UserSocial = sequelize.define(
    "UserSocial",
    {
      nuviUserId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      providerType: DataTypes.STRING,
      providerKey: DataTypes.STRING
    },
    {}
  );
  UserSocial.associate = function(models) {
    UserSocial.belongsTo(models.User, {
      foreignKey: "nuvi_user_id",
      onDelete: "cascade"
    });
  };
  return UserSocial;
};
