"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiBadRequestError = void 0;
const api_error_1 = require("./api-error");
const common_1 = require("@nestjs/common");
class ApiBadRequestError extends api_error_1.ApiError {
    constructor(error, message) {
        super(error, message, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.ApiBadRequestError = ApiBadRequestError;
//# sourceMappingURL=api-bad-request-error.js.map