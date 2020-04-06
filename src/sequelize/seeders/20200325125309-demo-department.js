"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "departments",
      [
        {
          id: 1,
          name: "서울시청",
          type: "회사"
        },
        {
          id: 2,
          name: "경기도교육청",
          type: "교육청"
        },
        {
          id: 3,
          name: "경기고등학교",
          type: "학교"
        }
      ],
      {}
    );
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
