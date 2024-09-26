"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = errorMiddleware;
function errorMiddleware(err, req, res, next) {
    const status = err.status ?? 500;
    const message = err.message ?? 'Internal server error';
    res.status(status).json({
        status,
        message,
    });
}
