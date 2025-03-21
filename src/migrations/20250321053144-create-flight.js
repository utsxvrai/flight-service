'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flight_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: 'Airplanes',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      flight_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      airline: {
        type: Sequelize.STRING,
        allowNull: false
      },
      departure_airport_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Airports',
          key: 'code'
        },
        onDelete: 'CASCADE',
        onUpdate : 'CASCADE'
      },
      arrival_airport_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Airports',
          key: 'code'
        },
        onDelete: 'CASCADE',
        onUpdate : 'CASCADE'
      },
      departure_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      arrival_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total_seats: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      available_seats: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM,
        values: ['Scheduled', 'Delayed', 'Cancelled', 'Departed', 'Arrived'],
        defaultValue: 'Scheduled',
        allowNull : false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};