"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(statusCode, error, message, shouldLogToExternal = true) {
        super();
        this.statusCode = statusCode;
        this.error = error;
        this.message = message;
        this.shouldLogToExternal = shouldLogToExternal;
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=api-error.js.map