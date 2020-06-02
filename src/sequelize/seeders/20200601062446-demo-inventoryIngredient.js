"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("inventory_ingredients", [
      { id: 1, name: "rutrum", inventory_category_id: 3, department_id: 1 },
      { id: 2, name: "dignissim", inventory_category_id: 4, department_id: 1 },
      { id: 3, name: "neque.", inventory_category_id: 2, department_id: 1 },
      { id: 4, name: "sed,", inventory_category_id: 5, department_id: 1 },
      { id: 5, name: "faucibus.", inventory_category_id: 3, department_id: 1 },
      { id: 6, name: "erat.", inventory_category_id: 7, department_id: 1 },
      { id: 7, name: "semper", inventory_category_id: 1, department_id: 1 },
      { id: 8, name: "metus", inventory_category_id: 1, department_id: 1 },
      { id: 9, name: "dolor", inventory_category_id: 3, department_id: 1 },
      { id: 10, name: "non,", inventory_category_id: 2, department_id: 1 },
      { id: 11, name: "ornare.", inventory_category_id: 5, department_id: 1 },
      { id: 12, name: "nisi.", inventory_category_id: 7, department_id: 1 },
      { id: 13, name: "Aenean", inventory_category_id: 2, department_id: 1 },
      { id: 14, name: "molestie", inventory_category_id: 6, department_id: 1 },
      { id: 15, name: "ut", inventory_category_id: 6, department_id: 1 },
      { id: 16, name: "nibh", inventory_category_id: 5, department_id: 1 },
      { id: 17, name: "mattis", inventory_category_id: 7, department_id: 1 },
      { id: 18, name: "sit", inventory_category_id: 4, department_id: 1 },
      { id: 19, name: "fringilla", inventory_category_id: 4, department_id: 1 },
      { id: 20, name: "fringilla", inventory_category_id: 6, department_id: 1 },
      {
        id: 21,
        name: "parturient",
        inventory_category_id: 6,
        department_id: 1
      },
      { id: 22, name: "Quisque", inventory_category_id: 3, department_id: 1 },
      { id: 23, name: "lectus", inventory_category_id: 1, department_id: 1 },
      { id: 24, name: "nec", inventory_category_id: 4, department_id: 1 },
      { id: 25, name: "Sed", inventory_category_id: 6, department_id: 1 },
      { id: 26, name: "augue", inventory_category_id: 6, department_id: 1 },
      { id: 27, name: "malesuada", inventory_category_id: 1, department_id: 1 },
      { id: 28, name: "volutpat", inventory_category_id: 2, department_id: 1 },
      { id: 29, name: "eu", inventory_category_id: 7, department_id: 1 },
      { id: 30, name: "urna", inventory_category_id: 1, department_id: 1 },
      { id: 31, name: "vehicula", inventory_category_id: 6, department_id: 1 },
      { id: 32, name: "amet", inventory_category_id: 4, department_id: 1 },
      { id: 33, name: "Fusce", inventory_category_id: 2, department_id: 1 },
      { id: 34, name: "quis,", inventory_category_id: 4, department_id: 1 },
      { id: 35, name: "lectus", inventory_category_id: 4, department_id: 1 },
      { id: 36, name: "ad", inventory_category_id: 1, department_id: 1 },
      { id: 37, name: "auctor,", inventory_category_id: 3, department_id: 1 },
      { id: 38, name: "nibh", inventory_category_id: 5, department_id: 1 },
      { id: 39, name: "Nunc", inventory_category_id: 3, department_id: 1 },
      { id: 40, name: "eget", inventory_category_id: 6, department_id: 1 },
      { id: 41, name: "dui", inventory_category_id: 7, department_id: 1 },
      { id: 42, name: "consequat", inventory_category_id: 6, department_id: 1 },
      { id: 43, name: "enim.", inventory_category_id: 2, department_id: 1 },
      { id: 44, name: "ut,", inventory_category_id: 2, department_id: 1 },
      { id: 45, name: "dui.", inventory_category_id: 5, department_id: 1 },
      {
        id: 46,
        name: "ullamcorper,",
        inventory_category_id: 5,
        department_id: 1
      },
      { id: 47, name: "cursus.", inventory_category_id: 6, department_id: 1 },
      {
        id: 48,
        name: "hymenaeos.",
        inventory_category_id: 2,
        department_id: 1
      },
      { id: 49, name: "eu,", inventory_category_id: 4, department_id: 1 },
      { id: 50, name: "faucibus", inventory_category_id: 4, department_id: 1 },
      { id: 51, name: "tellus", inventory_category_id: 2, department_id: 1 },
      { id: 52, name: "urna.", inventory_category_id: 1, department_id: 1 },
      { id: 53, name: "Proin", inventory_category_id: 7, department_id: 1 },
      { id: 54, name: "Nam", inventory_category_id: 1, department_id: 1 },
      { id: 55, name: "purus.", inventory_category_id: 2, department_id: 1 },
      { id: 56, name: "dolor", inventory_category_id: 3, department_id: 1 },
      {
        id: 57,
        name: "convallis,",
        inventory_category_id: 4,
        department_id: 1
      },
      { id: 58, name: "dictum", inventory_category_id: 3, department_id: 1 },
      { id: 59, name: "venenatis", inventory_category_id: 5, department_id: 1 },
      { id: 60, name: "arcu", inventory_category_id: 7, department_id: 1 },
      { id: 61, name: "turpis.", inventory_category_id: 4, department_id: 1 },
      { id: 62, name: "commodo", inventory_category_id: 6, department_id: 1 },
      { id: 63, name: "molestie", inventory_category_id: 7, department_id: 1 },
      { id: 64, name: "ante,", inventory_category_id: 1, department_id: 1 },
      { id: 65, name: "sed,", inventory_category_id: 5, department_id: 1 },
      { id: 66, name: "ornare,", inventory_category_id: 1, department_id: 1 },
      { id: 67, name: "cursus.", inventory_category_id: 2, department_id: 1 },
      { id: 68, name: "non,", inventory_category_id: 2, department_id: 1 },
      { id: 69, name: "pede", inventory_category_id: 5, department_id: 1 },
      { id: 70, name: "vitae", inventory_category_id: 2, department_id: 1 },
      { id: 71, name: "id", inventory_category_id: 5, department_id: 1 },
      { id: 72, name: "tincidunt", inventory_category_id: 5, department_id: 1 },
      { id: 73, name: "Praesent", inventory_category_id: 4, department_id: 1 },
      { id: 74, name: "metus", inventory_category_id: 1, department_id: 1 },
      { id: 75, name: "ipsum", inventory_category_id: 2, department_id: 1 },
      { id: 76, name: "natoque", inventory_category_id: 6, department_id: 1 },
      { id: 77, name: "dis", inventory_category_id: 3, department_id: 1 },
      { id: 78, name: "mauris", inventory_category_id: 7, department_id: 1 },
      { id: 79, name: "Curabitur", inventory_category_id: 2, department_id: 1 },
      { id: 80, name: "interdum.", inventory_category_id: 3, department_id: 1 },
      {
        id: 81,
        name: "adipiscing",
        inventory_category_id: 2,
        department_id: 1
      },
      { id: 82, name: "dui", inventory_category_id: 6, department_id: 1 },
      { id: 83, name: "turpis.", inventory_category_id: 5, department_id: 1 },
      { id: 84, name: "vitae", inventory_category_id: 3, department_id: 1 },
      { id: 85, name: "mi", inventory_category_id: 6, department_id: 1 },
      { id: 86, name: "nulla", inventory_category_id: 7, department_id: 1 },
      { id: 87, name: "dolor", inventory_category_id: 2, department_id: 1 },
      { id: 88, name: "neque.", inventory_category_id: 1, department_id: 1 },
      { id: 89, name: "iaculis", inventory_category_id: 3, department_id: 1 },
      { id: 90, name: "faucibus", inventory_category_id: 4, department_id: 1 },
      { id: 91, name: "Morbi", inventory_category_id: 3, department_id: 1 },
      { id: 92, name: "sit", inventory_category_id: 6, department_id: 1 },
      { id: 93, name: "luctus,", inventory_category_id: 2, department_id: 1 },
      { id: 94, name: "vitae", inventory_category_id: 1, department_id: 1 },
      { id: 95, name: "neque.", inventory_category_id: 7, department_id: 1 },
      { id: 96, name: "enim.", inventory_category_id: 2, department_id: 1 },
      {
        id: 97,
        name: "tincidunt.",
        inventory_category_id: 4,
        department_id: 1
      },
      { id: 98, name: "vitae", inventory_category_id: 3, department_id: 1 },
      { id: 99, name: "nisl", inventory_category_id: 7, department_id: 1 },
      { id: 100, name: "neque.", inventory_category_id: 6, department_id: 1 }
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
