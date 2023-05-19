/*
The application requires a middleware function called errorHandler that will handle errors that occur during processing of incoming HTTP requests. The function should accept four parameters - err, req, res, and next.

The function should check if the err parameter has the name JsonWebTokenError. If so, it should return a 400 status code with a JSON payload containing a message that describes the error as 'JWT Error'.

If the err parameter does not have the name JsonWebTokenError, the function should log the error stack and return a 500 status code with a JSON payload containing a message that says 'Something went wrong'.

In case there is an error when handling the error (try-catch block), the function should log the error stack and return a 500 status code with a JSON payload containing a message that says 'Internal server error'.

This middleware function is intended to be used as part of a chain of middleware functions that are invoked in the order they are registered in the Express application.
*/

function errorHandler(err, req, res, next) {
    try {
        //Write your code here
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = errorHandler;