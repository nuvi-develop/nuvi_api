"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn("inventory_ingredients", "ingredient_unit_id", {
        type: Sequelize.INTEGER,
        defaultValue: 1
      })
      .then(() =>
        queryInterface.addConstraint("inventory_ingredients", {
          fields: ["ingredient_unit_id"],
          type: "FOREIGN KEY",
          name: "FK_ingredient_unit",
          references: {
            table: "ingredient_units",
            field: "id"
          },
          onDelete: "set null",
          onUpdate: "cascade"
        })
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .removeConstraint("inventory_ingredients", "FK_ingredient_unit")
      .then(() =>
        queryInterface.removeColumn(
          "inventory_ingredients",
          "ingredient_unit_id"
        )
      );
  }
};
