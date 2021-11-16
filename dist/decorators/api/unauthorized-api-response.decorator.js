"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedApiResponse = void 0;
const interfaces_1 = require("../../interfaces");
const swagger_1 = require("@nestjs/swagger");
const UnauthorizedApiResponse = (description = 'Пользователь не авторизован') => (0, swagger_1.ApiUnauthorizedResponse)({
    description,
    type: interfaces_1.ApiErrorResponse,
});
exports.UnauthorizedApiResponse = UnauthorizedApiResponse;
//# sourceMappingURL=unauthorized-api-response.decorator.js.map