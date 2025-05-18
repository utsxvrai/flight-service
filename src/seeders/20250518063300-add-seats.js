'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('seats', [
      {
        airplaneId: 1,
        row: 1,
        col: 'A',
        type: 'economy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneId: 1,
        row: 2,
        col: 'B',
        type: 'economy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneId: 1,
        row: 3,
        col: 'C',
        type: 'economy',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
