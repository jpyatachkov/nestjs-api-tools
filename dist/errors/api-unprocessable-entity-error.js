"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUnprocessableEntityError = void 0;
const api_error_1 = require("@/errors/api-error");
const common_1 = require("@nestjs/common");
class ApiUnprocessableEntityError extends api_error_1.ApiError {
    constructor(error, message, shouldLogToExternal = true) {
        super(common_1.HttpStatus.UNPROCESSABLE_ENTITY, error, message, shouldLogToExternal);
    }
}
exports.ApiUnprocessableEntityError = ApiUnprocessableEntityError;
//# sourceMappingURL=api-unprocessable-entity-error.js.map