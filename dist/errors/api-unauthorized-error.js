"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUnauthorizedError = void 0;
const common_1 = require("@nestjs/common");
class ApiUnauthorizedError extends common_1.UnauthorizedException {
    getExternalLogMessage() {
        return null;
    }
}
exports.ApiUnauthorizedError = ApiUnauthorizedError;
//# sourceMappingURL=api-unauthorized-error.js.map