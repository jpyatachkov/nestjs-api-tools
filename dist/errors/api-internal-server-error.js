"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiInternalServerError = void 0;
const common_1 = require("@nestjs/common");
class ApiInternalServerError extends common_1.InternalServerErrorException {
    getExternalLogMessage() {
        return null;
    }
}
exports.ApiInternalServerError = ApiInternalServerError;
//# sourceMappingURL=api-internal-server-error.js.map