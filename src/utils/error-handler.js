const { StatusCodes } = require('http-status-codes');

class AppErrors extends Error {
    constructor(
        name = 'AppError',
        message = 'Something went wrong',
        explanation = 'Something went wrong',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ) {
        super(message);  // Properly set the message in the Error class
        this.name = name;
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
}

module.exports = AppErrors;
