const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.statusCode ? res.statusCode : 500;

    switch (errorStatusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation failed",
                message: `${err.message}`,
                stackTrace: `${err.stack}`
            })
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "User is unauthorized",
                message: `${err.message}`,
                stackTrace: `${err.stack}`
            })
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden error",
                message: `${err.message}`,
                stackTrace: `${err.stack}`
            })
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Resource not found",
                message: `${err.message}`,
                stackTrace: `${err.stack}`
            })
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "Internal server error",
                message: `${err.message}`,
                stackTrace: `${err.stack}`
            })
            break;
        default:
            console.log("No error");
            res.json({
                title: "Response fetched",
                message: "all good"
            })
            break;
    }
};

module.exports = errorHandler;