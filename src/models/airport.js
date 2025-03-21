'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Airport.belongsTo(models.City, {
        foreignKey: 'cityId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Airport.hasMany(models.Flight, {
        foreignKey: 'departure_airport_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Airport.hasMany(models.Flight, {
        foreignKey: 'arrival_airport_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Airport.init({
    name:{
        type : DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address:{
        type :  DataTypes.STRING,
        unique: true
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Airport',

  });
  return Airport;
};