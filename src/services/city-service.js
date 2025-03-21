const { StatusCodes } = require('http-status-codes');
const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');  

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            const explanation = error.errors.map(err => err.message).join(", ");
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }

        throw new AppError('Cannot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(id){
    try {
        const city =  await cityRepository.destroy(id);
        // console.log(city);
        if(city == 0){
            throw new AppError('City not found', StatusCodes.NOT_FOUND);
        }
        return city;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Cannot delete City object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(id, data) {  
    try{
        const city = await cityRepository.update(id, data);
        if(city == 0){
            throw new AppError('City not found', StatusCodes.NOT_FOUND);
        }
        return city;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested to update is not present', error.statusCode);
        }
        throw new AppError('Cannot update City object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createCity,
    destroyCity,
    updateCity
};
