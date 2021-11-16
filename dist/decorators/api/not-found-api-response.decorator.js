"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundApiResponse = void 0;
const interfaces_1 = require("../../interfaces");
const swagger_1 = require("@nestjs/swagger");
const NotFoundApiResponse = (description = 'Запрашиваемый ресурс не найден') => (0, swagger_1.ApiNotFoundResponse)({
    description,
    type: interfaces_1.ApiErrorResponse,
});
exports.NotFoundApiResponse = NotFoundApiResponse;
//# sourceMappingURL=not-found-api-response.decorator.js.map