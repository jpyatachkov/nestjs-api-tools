"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestApiResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const interfaces_1 = require("../../interfaces");
exports.BadRequestApiResponse = (description = 'Некорректное тело запроса') => swagger_1.ApiBadRequestResponse({
    description,
    type: interfaces_1.ApiErrorResponse,
});
//# sourceMappingURL=bad-request-api-response.decorator.js.map