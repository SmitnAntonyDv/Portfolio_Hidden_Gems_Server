'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('countries', [
      {
        name: 'Indonesia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Malaysia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Thailand',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Singapore',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Vietnam',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('countries', null, {});
  },
};
