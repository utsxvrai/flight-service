const { StatusCodes } = require('http-status-codes');
const {AirportRepository} = require('../repositories');
const { AppError } = require('../utils');

const airportRepository = new AirportRepository();

async function createAirport(data){
    try {
        const airport = await airportRepository.create(data);
        return airport;
    }
    catch(error){
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airplance object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(){
    try {
        const airport = await airportRepository.getAll();
        return airport;
    }
    catch(error){
        throw new AppError('Cannot get airport object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getAirportById(id){
    try {
        const airport = await airportRepository.get(id);
        // if(!airport){
        //     throw new AppError('airport not found', StatusCodes.NOT_FOUND);
        // }
        return airport;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            console.log(error.statusCode);
            throw new AppError('The airport you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Cannot get airport object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id){
    try {
        const airport = await airportRepository.destroy(id);
        if(airport == 0){
            throw new AppError('airport not found', StatusCodes.NOT_FOUND);
        }
        return airport;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested to delete is not present', error.statusCode);    
        }
    }
}

async function updateAirport(id, data){
    try {
        const airport = await airportRepository.update(id, data);
        return airport;
    }
    catch(error){
        throw new AppError('Cannot update airport object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirport,
    getAirport,
    getAirportById,
    destroyAirport,
    updateAirport
}
