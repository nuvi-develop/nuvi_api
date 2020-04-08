"use strict";

import { encrypt } from "@/helper";

module.exports = (sequelize, DataTypes) => {
  const UserTraditional = sequelize.define(
    "UserTraditional",
    {
      nuviUserId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      password: DataTypes.STRING
    },
    {}
  );
  UserTraditional.associate = function(models) {
    UserTraditional.belongsTo(models.User, {
      foreignKey: "nuvi_user_id",
      onDelete: "cascade"
    });
  };

  UserTraditional.createEncrypted = user => {
    const { password } = user;
    const encryptedPassword = encrypt(password);
    UserTraditional.create({
      nuvi_user_id: user.id,
      password: encryptedPassword
    });
  };

  UserTraditional.verify = (inputPassword, encryptedPassword) => {
    const encryptedInput = encrypt(inputPassword);
    return encryptedInput === encryptedPassword;
  };

  return UserTraditional;
};
