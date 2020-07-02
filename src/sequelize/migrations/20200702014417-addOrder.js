"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("inventory_ingredients", "order", {
      type: Sequelize.FLOAT
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("inventory_ingredients", "order");
  }
};
