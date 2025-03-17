'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('airplanes', [
      {
        modelNumber: 'Boeing 789',
        capacity: 520,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Airbus A350',
        capacity: 440,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Embraer E195',
        capacity: 132,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('airplanes', {
      modelNumber: ['Boeing 789', 'Airbus A350', 'Embraer E195']
    }, {});
  }
};