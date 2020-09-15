"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiForbiddenError = void 0;
const api_error_1 = require("./api-error");
const common_1 = require("@nestjs/common");
class ApiForbiddenError extends api_error_1.ApiError {
    constructor(error, message) {
        super(error, message, common_1.HttpStatus.FORBIDDEN);
    }
}
exports.ApiForbiddenError = ApiForbiddenError;
//# sourceMappingURL=api-forbidden-error.js.map