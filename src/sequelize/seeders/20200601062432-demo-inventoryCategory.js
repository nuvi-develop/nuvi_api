"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("inventory_categories", [
      {
        id: 1,
        name: "잡곡류",
        department_id: 1
      },
      {
        id: 2,
        name: "김치류",
        department_id: 1
      },
      {
        id: 3,
        name: "육류",
        department_id: 1
      },
      {
        id: 4,
        name: "채소류",
        department_id: 1
      },
      {
        id: 5,
        name: "수산류",
        department_id: 1
      },
      {
        id: 6,
        name: "공산품(면류포함)",
        department_id: 1
      },
      {
        id: 7,
        name: "간식",
        department_id: 1
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
