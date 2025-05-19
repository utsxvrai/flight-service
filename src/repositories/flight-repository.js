const CrudRepository = require('./crud-repository');
const { Flight, Airplane, City, Airport } = require('../models');
const {Sequelize, Op} = require('sequelize');
const { AppError, StatusCodes } = require('../utils');
const { addRowLockOnFlights } = require('./queries');
const db = require('../models');



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
    async updateSeats(data) {
        // rowLevelLocking  pessimistic locking
        await db.sequelize.query(addRowLockOnFlights(data.flightId));
        const { flightId, seats, dec } = data;
        const flight = await Flight.findByPk(flightId);
        
        if (!flight) {
            throw new AppError('Flight not found', StatusCodes.NOT_FOUND);
        }

        const airplane = await flight.getAirplaneDetail();
        
        if (dec) {
            if (flight.totalSeats < seats) {
                throw new AppError('Not enough seats available', StatusCodes.BAD_REQUEST);
            }
            await flight.decrement('totalSeats', { by: seats });
        } else {
            if (flight.totalSeats + seats > airplane.capacity) {
                throw new AppError('Cannot add more seats than airplane capacity', StatusCodes.BAD_REQUEST);
            }
            await flight.increment('totalSeats', { by: seats });
        }
        
        await flight.save();
        return flight;
    }
    
}


module.exports =  FlightRepository;