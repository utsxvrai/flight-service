'use strict';
const {
  Model
} = require('sequelize');
const {Enums} = require('../utils');
const {ECONOMY, BUSINESS, FIRST_CLASS, PREMIUM_ECONOMY} = Enums.SeatType;

module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here  
      Seat.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      
    }
  }
  Seat.init({
        airplaneId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Airplanes',
            key: 'id'
          }
        },
    row: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    col: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: [ECONOMY, BUSINESS, FIRST_CLASS, PREMIUM_ECONOMY],
      allowNull: false,
      defaultValue: ECONOMY,
    },
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};