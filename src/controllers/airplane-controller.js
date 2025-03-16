const { StatusCodes } = require('http-status-codes');
const {AirplaneService} = require('../services');
const {SuccessResponse, ErrorResponse} = require('../utils');

/**
 post : /airplane
 req.body = {
        "name": "Boeing 747",
        "fuel_capacity": 1000,
        "type": "Passenger"
    }
**/


async function  createAirplane(req, res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        // console.log(airplane);
        SuccessResponse.data = airplane;
        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.message = 'Something went wrong';
        return res
        .status(error.statusCodes)
        .json(ErrorResponse);
    } 
}

module.exports = {
    createAirplane
}