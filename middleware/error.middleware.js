const errorMiddleware = (err, req, res, next) => {
    try {
        let error = { ...err };
        error.message = err.message;

        console.log(err);

        // Mongoose bad ObjectId
        if (err.name === 'CastError') {
            const message = `Resource not found`;

            error = new Error(message);
            error.statusCode = 404;
        }

        // Mongoose duplicate key
        else if (err.code === 11000) {
            const message = 'Duplicate field value entered';

            error = new Error(message);
            error.statusCode = 400;
        }

        // Mongoose validation error
        else if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map((val) => val.message);

            error = new Error(message.join(', '));
            error.statusCode = 400;
        }
        
    } catch (error) {
        next(error);
    }
};

