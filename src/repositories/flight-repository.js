const CrudRepository = require('./crud-repository');
const { Flight, Airplane, Airport  } = require('../models');
const {Sequelize, Op} = require('sequelize');



class FlightRepository extends CrudRepository {
    constructor(){
        super(Flight);
    }

    async getAllFlights(filter,sort) {
        console.log('Filter:', filter);
        console.log('Sort:', sort);
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
                on:{
                    col1 : Sequelize.where(Sequelize.col('Flight.departureAirportId'), '=', Sequelize.col('departureAirport.code'))
                }
            },
            {
                model: Airport,
                required: true,
                as: 'arrivalAirport',
                on:{
                    col1 : Sequelize.where(Sequelize.col('Flight.arrivalAirportId'), '=', Sequelize.col('arrivalAirport.code'))
                }
            }],
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            raw: true,
            nest: true,
            logging: console.log
        });
        console.log('Found flights:', flights.length);
        return flights; 
    }

    
}


module.exports =  FlightRepository;