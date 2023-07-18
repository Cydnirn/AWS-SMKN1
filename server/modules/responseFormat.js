/*
    Modules for formatting responses
*/

module.exports = {
    responseSuccess: (res, statusCode, message) => {
        return res.status(statusCode || 200).json({
            status: "success",
            message: message,
        });
    },
    responseFailed: (res, statusCode, message) => {
        return res.status(statusCode || 500).json({
            status: "failed",
            error: message,
        });
    },
};
