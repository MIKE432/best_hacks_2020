class RequestError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
exports.RequestError = RequestError;

exports.BadRequestError = class BadRequestError extends RequestError {
    constructor(message) {
        super(400, message);
    }
};

exports.UnauthorizedError = class UnauthorizedError extends RequestError {
    constructor(message) {
        super(401, message);
    }
};

exports.NotFoundError = class NotFoundError extends RequestError {
    constructor(message) {
        super(404, message);
    }
};

exports.handleErrors = (fn) => (req, res, next) => {
        const runResult = fn(req, res, next);
        runResult.catch && runResult.catch(next);
};