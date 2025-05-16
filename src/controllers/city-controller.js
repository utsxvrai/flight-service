const {StatusCodes} = require('http-status-codes');
const {CityService} = require('../services');
const {SuccessResponse, ErrorResponse} = require('../utils');

/**
 * POST : /city
 * req.body = {
 *     "name": "Mumbai",
 *    "state": "Maharashtra",
 *   "country": "India"
 * }
 */ 
async function createCity(req, res){
    try {
        const city = await CityService.createCity({
            name: req.body.name,
            state: req.body.state,
            country: req.body.country
        });
        SuccessResponse.data = city;
        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse);
    }
    catch(error){
        const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
        ErrorResponse.message = error.message || 'Something went wrong';
        return res.status(statusCode).json(ErrorResponse);
    }
}

async function destroyCity(req, res){
    try {
        const city = await CityService.destroyCity(req.params.id);
        // console.log(city);
        SuccessResponse.data = city;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
    }
    catch(error){
        const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
        ErrorResponse.message = error.message || 'Something went wrong';
        return res.status(statusCode).json(ErrorResponse);
    }
}

async function updateCity(req, res){
    try {
        const city = await CityService.updateCity(req.params.id, {
            name: req.body.name,
            state: req.body.state,
            country: req.body.country
        });
        SuccessResponse.data = city;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
    }
    catch(error){
        const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
        ErrorResponse.message = error.message || 'Something went wrong';
        return res.status(statusCode).json(ErrorResponse);
    }
}

async function getAllCities(req, res){
    try {
        const cities = await CityService.getAllCities(req.query);
        SuccessResponse.data = cities;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
module.exports = {
    createCity,
    destroyCity,
    updateCity,
    getAllCities
}
