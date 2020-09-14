"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUnauthorizedError = void 0;
const api_error_1 = require("@/errors/api-error");
const common_1 = require("@nestjs/common");
class ApiUnauthorizedError extends api_error_1.ApiError {
    constructor(error, message) {
        super(error, message, common_1.HttpStatus.UNAUTHORIZED);
    }
}
exports.ApiUnauthorizedError = ApiUnauthorizedError;
//# sourceMappingURL=api-unauthorized-error.js.map