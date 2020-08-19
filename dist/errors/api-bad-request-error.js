"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiBadRequestError = void 0;
const api_error_1 = require("@/errors/api-error");
const common_1 = require("@nestjs/common");
class ApiBadRequestError extends api_error_1.ApiError {
    constructor(error, message, shouldLogToExternal = true) {
        super(common_1.HttpStatus.BAD_REQUEST, error, message, shouldLogToExternal);
    }
}
exports.ApiBadRequestError = ApiBadRequestError;
//# sourceMappingURL=api-bad-request-error.js.map