"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiBadRequestError = void 0;
const common_1 = require("@nestjs/common");
class ApiBadRequestError extends common_1.BadRequestException {
    getExternalLogMessage() {
        return null;
    }
}
exports.ApiBadRequestError = ApiBadRequestError;
//# sourceMappingURL=api-bad-request-error.js.map