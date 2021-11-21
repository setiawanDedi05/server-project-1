'use strict';
const {hashing} = require('../helper/bcrypt.js')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        "username": "Dedi Setiawan 1",
        "email": "ddie@decade.com",
        "password": hashing("12345678"),
        "role": "admin",
        "phoneNumber": "081575271662",
        "address": "Cipanas",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "username": "Anisa Nurul Hakim",
        "email": "Anisa@gmail.com",
        "password": hashing("12345678"),
        "role": "user",
        "phoneNumber": "081575271661",
        "address": "Cipanas",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "username": "agus irawan",
        "email": "AgusIrawan@gmail.com",
        "password": hashing("12345678"),
        "role": "user",
        "phoneNumber": "081575271661",
        "address": "Cipanas",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "username": "Shuffle Channel",
        "email": "shuffle.ddie@gmail.com",
        "password": hashing("12345678"),
        "role": "user",
        "phoneNumber": "",
        "address": "",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "username": "primaze1",
        "email": "primaze@gmail.com",
        "password": hashing("12345678"),
        "role": "user",
        "address": "cipanas",
        "phoneNumber": "81575271669",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "username": "layla",
        "email": "asdfsd@gmail.com",
        "password": hashing("12345678"),
        "role": "user",
        "address": "asdfasdfasd",
        "phoneNumber": "81575271669",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "username": "japuh18",
        "email": "japuh05@gmail.com",
        "password": hashing("12345678"),
        "role": "user",
        "address": "cipanas",
        "phoneNumber": "81575271611",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "username": "Dedi Setiawan5",
        "email": "ddie5.theonlyone@gmail.com",
        "password": hashing("12345678"),
        "role": "user",
        "phoneNumber": "",
        "address": "",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "username": "azmi01",
        "email": "ananda@gmail.com",
        "password": hashing("12345678"),
        "role": "user",
        "address": "banyumas",
        "phoneNumber": "1321546587",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "username": "Dedi Setiawan",
        "email": "ddie.theonlyone@gmail.com",
        "password": hashing("12345678"),
        "role": "user",
        "phoneNumber": "",
        "address": "",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
