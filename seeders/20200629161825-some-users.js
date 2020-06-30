'use strict';
const bcrypt = require("bcrypt");
const {SALT_ROUNDS} = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "testuser",
          email: "test@test.com",
          phoneNumber: 123456766,
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          latitude: -8.639877,
          longitude: 115.140172,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Doe",
          email: "J.D@gmail.com",
          phoneNumber: 123456765,
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          latitude: -8.519268,
          longitude: 115.263298,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "fu bar",
          email: "fu@bar.com",
          phoneNumber: 123456761,
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          latitude: -8.639877,
          longitude: 115.140172,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "a",
          email: "a@a.com",
          phoneNumber: 123456766,
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          latitude: -8.583333,
          longitude: 116.116667,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete("users", null, {});
  }
};
