"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUnprocessableEntityError = void 0;
const common_1 = require("@nestjs/common");
class ApiUnprocessableEntityError extends common_1.UnprocessableEntityException {
    getExternalLogMessage() {
        return null;
    }
}
exports.ApiUnprocessableEntityError = ApiUnprocessableEntityError;
//# sourceMappingURL=api-unprocessable-entity-error.js.map