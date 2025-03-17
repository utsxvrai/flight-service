class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;  // Default to 500 if not provided
        this.explanation = message;
    }
}

module.exports = AppError;
