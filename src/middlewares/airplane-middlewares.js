const { StatusCodes } = require("http-status-codes");

const {ErrorResponse} = require("../utils");

function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber){
        ErrorResponse.message = "something went wrong while creating airplane!";
        ErrorResponse.error = {explanation : "Model number not found in the oncoming!"};
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next(); //controller will be the next middleware 
}

module.exports = {
    validateCreateRequest
}