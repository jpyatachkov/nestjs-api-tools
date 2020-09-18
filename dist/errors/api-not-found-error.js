"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiNotFoundError = void 0;
const common_1 = require("@nestjs/common");
class ApiNotFoundError extends common_1.NotFoundException {
    getExternalLogMessage() {
        return null;
    }
}
exports.ApiNotFoundError = ApiNotFoundError;
//# sourceMappingURL=api-not-found-error.js.map