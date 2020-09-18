"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiForbiddenError = void 0;
const common_1 = require("@nestjs/common");
class ApiForbiddenError extends common_1.ForbiddenException {
    getExternalLogMessage() {
        return null;
    }
}
exports.ApiForbiddenError = ApiForbiddenError;
//# sourceMappingURL=api-forbidden-error.js.map