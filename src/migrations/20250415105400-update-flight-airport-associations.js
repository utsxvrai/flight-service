'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Get the table description to check which columns exist
    const tableDescription = await queryInterface.describeTable('Flights');
    
    // Only rename columns if they exist with the old names
    if (tableDescription.flight_id) {
      await queryInterface.renameColumn('Flights', 'flight_id', 'airplaneId');
    }
    if (tableDescription.departure_airport_id) {
      await queryInterface.renameColumn('Flights', 'departure_airport_id', 'departureAirportId');
    }
    if (tableDescription.arrival_airport_id) {
      await queryInterface.renameColumn('Flights', 'arrival_airport_id', 'arrivalAirportId');
    }
  },

  async down(queryInterface, Sequelize) {
    // Get the table description to check which columns exist
    const tableDescription = await queryInterface.describeTable('Flights');
    
    // Only rename columns if they exist with the new names
    if (tableDescription.airplaneId) {
      await queryInterface.renameColumn('Flights', 'airplaneId', 'flight_id');
    }
    if (tableDescription.departureAirportId) {
      await queryInterface.renameColumn('Flights', 'departureAirportId', 'departure_airport_id');
    }
    if (tableDescription.arrivalAirportId) {
      await queryInterface.renameColumn('Flights', 'arrivalAirportId', 'arrival_airport_id');
    }
  }
};
