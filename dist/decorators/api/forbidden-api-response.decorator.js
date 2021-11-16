"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenApiResponse = void 0;
const interfaces_1 = require("../../interfaces");
const swagger_1 = require("@nestjs/swagger");
const ForbiddenApiResponse = (description = 'Недостаточно прав для выполнения операции') => (0, swagger_1.ApiForbiddenResponse)({
    description,
    type: interfaces_1.ApiErrorResponse,
});
exports.ForbiddenApiResponse = ForbiddenApiResponse;
//# sourceMappingURL=forbidden-api-response.decorator.js.map