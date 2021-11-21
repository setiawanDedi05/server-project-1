'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Tags', [
      {
        "postId": 5,
        "name": "tech",
        "createdAt": "1994-12-24T17:00:00.000Z",
        "updatedAt": "1994-12-24T17:00:00.000Z"
      },
      {
        "postId": 16,
        "name": "school",
        "createdAt": "2021-11-21T05:14:40.811Z",
        "updatedAt": "2021-11-21T05:14:40.811Z"
      },
      {
        "postId": 1,
        "name": "sport",
        "createdAt": "2021-11-21T05:14:40.811Z",
        "updatedAt": "2021-11-21T05:14:40.811Z"
      },
      {
        "postId": 2,
        "name": "health",
        "createdAt": "2021-11-21T05:14:40.811Z",
        "updatedAt": "2021-11-21T05:14:40.811Z"
      },
      {
        "postId": 4,
        "name": "jnjknkj",
        "createdAt": "2021-11-21T05:14:40.811Z",
        "updatedAt": "2021-11-21T05:14:40.811Z"
      },
      {
        "postId": 6,
        "name": "nbijbij",
        "createdAt": "2021-11-21T05:14:40.811Z",
        "updatedAt": "2021-11-21T05:14:40.811Z"
      },
      {
        "postId": 7,
        "name": "hvjhvjh",
        "createdAt": "2021-11-21T05:14:40.811Z",
        "updatedAt": "2021-11-21T05:14:40.811Z"
      },
      {
        "postId": 8,
        "name": "uhvuhv",
        "createdAt": "2021-11-21T05:14:40.811Z",
        "updatedAt": "2021-11-21T05:14:40.811Z"
      },
      {
        "postId": 9,
        "name": "ijbiujbijb",
        "createdAt": "2021-11-21T05:14:40.811Z",
        "updatedAt": "2021-11-21T05:14:40.811Z"
      },
      {
        "postId": 3,
        "name": "hype life-syle",
        "createdAt": "2021-11-21T05:14:40.811Z",
        "updatedAt": "2021-11-21T05:14:40.811Z"
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
