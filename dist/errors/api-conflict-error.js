"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConflictError = void 0;
const api_error_1 = require("@/errors/api-error");
const common_1 = require("@nestjs/common");
class ApiConflictError extends api_error_1.ApiError {
    constructor(error, message) {
        super(error, message, common_1.HttpStatus.CONFLICT);
    }
}
exports.ApiConflictError = ApiConflictError;
//# sourceMappingURL=api-conflict-error.js.map