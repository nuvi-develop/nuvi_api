"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "departments",
      [
        {
          id: 1,
          name: "서울시청",
          logo:
            "https://dev-cityhall-admin-202003-photo.s3.ap-northeast-2.amazonaws.com" +
            `/department/1.svg`,
          total_number: 100,
          type: "회사"
        },
        {
          id: 2,
          name: "경기도교육청",
          logo:
            "https://dev-cityhall-admin-202003-photo.s3.ap-northeast-2.amazonaws.com" +
            `/department/2.svg`,
          total_number: 100,
          type: "교육청"
        },
        {
          id: 3,
          name: "경기고등학교",
          logo:
            "https://dev-cityhall-admin-202003-photo.s3.ap-northeast-2.amazonaws.com" +
            `/department/3.svg`,
          total_number: 100,
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
