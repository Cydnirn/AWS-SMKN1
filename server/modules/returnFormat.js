/* 
Modules for nested function return format

*/

module.exports = {
    createError: (message, statusCode) => {
        const error = new Error(message);
        error.statusCode = statusCode ? statusCode : 500;
        return error;
    },
    createResult: (message, status) => {
        const result = {
            status: status,
            message: message,
        };
        return result;
    },
};
