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
    await queryInterface.bulkInsert('Categories', [
      {
        "name": "Bussiness",
        "createdAt": "2021-11-08",
        "updatedAt": "2021-11-17T14:27:53.144Z"
      },
      {
        "name": "Sports",
        "createdAt": "2021-11-08",
        "updatedAt": "2021-11-08"
      },
      {
        "name": "Tech",
        "createdAt": "2021-11-08",
        "updatedAt": "2021-11-08"
      },
      {
        "name": "Hype",
        "createdAt": "2021-11-08",
        "updatedAt": "2021-11-08"
      },
      {
        "name": "Life",
        "createdAt": "2021-11-08",
        "updatedAt": "2021-11-08"
      },
      {
        "name": "Health",
        "createdAt": "2021-11-08",
        "updatedAt": "2021-11-08"
      },
      {
        "name": "Otomotif",
        "createdAt": "2021-11-15T10:38:44.467Z",
        "updatedAt": "2021-11-16T13:47:38.811Z"
      },
      {
        "name": "Travel",
        "createdAt": "2021-11-16T13:48:01.515Z",
        "updatedAt": "2021-11-16T13:48:01.515Z"
      },
      {
        "name": "Entertainment",
        "createdAt": "2021-11-17T14:41:53.585Z",
        "updatedAt": "2021-11-17T14:41:53.585Z"
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
