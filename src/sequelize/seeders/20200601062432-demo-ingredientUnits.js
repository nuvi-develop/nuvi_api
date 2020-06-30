"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("ingredient_units", [
      {
        id: 1,
        name: "kg"
      },
      {
        id: 2,
        name: "봉"
      },
      {
        id: 3,
        name: "팩"
      },
      {
        id: 4,
        name: "판"
      },
      {
        id: 5,
        name: "캔"
      },
      {
        id: 6,
        name: "박스"
      },
      {
        id: 7,
        name: "통"
      },
      {
        id: 8,
        name: "병"
      },
      {
        id: 9,
        name: "포"
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
