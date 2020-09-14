"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
const common_1 = require("@nestjs/common");
class ApiError extends Error {
    constructor(error, message, statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
        super();
        this.error = error;
        this.message = message;
        this.statusCode = statusCode;
    }
    getExternalLogMessage() {
        return null;
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=api-error.js.map