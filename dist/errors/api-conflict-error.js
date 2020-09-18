"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConflictError = void 0;
const common_1 = require("@nestjs/common");
class ApiConflictError extends common_1.ConflictException {
    getExternalLogMessage() {
        return null;
    }
}
exports.ApiConflictError = ApiConflictError;
//# sourceMappingURL=api-conflict-error.js.map