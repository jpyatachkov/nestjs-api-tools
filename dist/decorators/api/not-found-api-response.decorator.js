"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundApiResponse = void 0;
const interfaces_1 = require("@/interfaces");
const swagger_1 = require("@nestjs/swagger");
exports.NotFoundApiResponse = (description = 'Запрашиваемый ресурс не найден') => swagger_1.ApiNotFoundResponse({
    description,
    type: interfaces_1.ApiError,
});
//# sourceMappingURL=not-found-api-response.decorator.js.map