"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Flight extends Model {
    static associate(models) {
      // Define associations here (e.g., Flight.belongsTo(models.Airport, { foreignKey: 'departure_airport_id' }))
      Flight.belongsTo(models.Airport, {
        foreignKey: "code",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Flight.belongsTo(models.Airport, {
        foreignKey: "code",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Flight.belongsTo(models.Airplane, {
        foreignKey: "flight_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      
    }
  }

  Flight.init(
    {
      flight_id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Ensures uniqueness as an identifier
        allowNull: false,
        unique: true,
      },
      flight_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      airline: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      departure_airport_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrival_airport_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      departure_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      arrival_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false, // Duration in minutes/hours
      },
      total_seats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      available_seats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("Scheduled", "Delayed", "Cancelled", "Departed", "Arrived"),
        defaultValue: "Scheduled",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Flight",
      timestamps: true, // Adds createdAt & updatedAt columns
      underscored: true, // Uses snake_case instead of camelCase in DB
    }
  );

  return Flight;
};
