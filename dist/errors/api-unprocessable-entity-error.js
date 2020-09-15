"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUnprocessableEntityError = void 0;
const api_error_1 = require("./api-error");
const common_1 = require("@nestjs/common");
class ApiUnprocessableEntityError extends api_error_1.ApiError {
    constructor(error, message) {
        super(error, message, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
    }
}
exports.ApiUnprocessableEntityError = ApiUnprocessableEntityError;
//# sourceMappingURL=api-unprocessable-entity-error.js.map