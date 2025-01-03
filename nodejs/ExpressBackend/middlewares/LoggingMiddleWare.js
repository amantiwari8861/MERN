let loggingMiddleware = (req, res, next) => {
    console.log("logging..");
    next();
};

exports.loggingMiddleware=loggingMiddleware;