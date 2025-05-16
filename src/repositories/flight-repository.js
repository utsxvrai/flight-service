const CrudRepository = require('./crud-repository');
const { Flight, Airplane, City, Airport } = require('../models');
const {Sequelize, Op} = require('sequelize');



class FlightRepository extends CrudRepository {
    constructor(){
        super(Flight);
    }

    async getAllFlights(filter,sort) {
        try {
            const flights = await Flight.findAll({
                where: filter,
                order: sort,
                include: [{
                    model: Airplane,
                    required: true,
                    as: 'airplaneDetail'
                },
                {
                    model: Airport,
                    required: true,
                    as: 'departureAirport',
                    include: [{
                        model: City,
                        required: true,
                        as: 'city'
                    }]
                },
                {
                    model: Airport,
                    required: true,
                    as: 'arrivalAirport',
                    include: [{
                        model: City,
                        required: true,
                        as: 'city'
                    }]
                }]
            });
            return flights;
        } catch (error) {
            console.error('Error in flight repository:', error);
            throw error;
        }
    }

    
}


module.exports =  FlightRepository;