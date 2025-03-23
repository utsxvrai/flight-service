const { StatusCodes } = require('http-status-codes');
const {AirportService} = require('../services');
const {SuccessResponse, ErrorResponse} = require('../utils');

/**
 post : /airport
 req.body = {
        "name": "Indra Gandhi International Airport",
        "code": "DEL",
        "address": "New Delhi",
        "cityId": 
    }
**/


async function  createAirport(req, res){
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        // console.log(Airport);
        SuccessResponse.data = airport;
        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.message = 'Something went wrong';
        return res
        .status(error.statusCode)
        .json(ErrorResponse);
    } 
}
/*
GET : /airport
req.body = {}
*/
async function getAirport(req, res){
    try {
        const airport = await AirportService.getAirport();
        SuccessResponse.data = airport;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.message = 'Something went wrong';
        return res
        .status(error.statusCode)
        .json(ErrorResponse);
    }
}
/**
 * 
 *POST : /airport/:id
 *req.body = {}
 */
async function getAirportById(req, res){
    try {
        const airport = await AirportService.getAirportById(req.params.id);
        SuccessResponse.data = airport;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse);
    }
}
async function destroyAirport(req,res){
    try{
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airport;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse);
    }
}
async function updateAirport(req,res){
    try{
        const airport = await AirportService.updateAirport(req.params.id, req.body);
        SuccessResponse.data = airport;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse);
    }
}


module.exports = {
    createAirport,
    getAirport,
    getAirportById,
    destroyAirport,
    updateAirport
}