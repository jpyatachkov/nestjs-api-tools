"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedApiResponse = void 0;
const interfaces_1 = require("@/interfaces");
const swagger_1 = require("@nestjs/swagger");
exports.UnauthorizedApiResponse = (description = 'Пользователь не авторизован') => swagger_1.ApiUnauthorizedResponse({
    description,
    type: interfaces_1.ApiErrorResponse,
});
//# sourceMappingURL=unauthorized-api-response.decorator.js.map