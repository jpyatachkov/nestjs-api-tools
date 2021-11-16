"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveApiResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const interfaces_1 = require("../../interfaces");
const SaveApiResponse = (options) => (0, common_1.applyDecorators)((0, common_1.HttpCode)(options.status || common_1.HttpStatus.CREATED), (0, swagger_1.ApiResponse)({
    status: options.status || common_1.HttpStatus.CREATED,
    description: options.description,
    type: options.type,
    isArray: options.isArray,
}), (0, swagger_1.ApiBadRequestResponse)({
    description: options.errorDescription || 'Некорректное тело запроса',
    type: interfaces_1.ApiErrorResponse,
}));
exports.SaveApiResponse = SaveApiResponse;
//# sourceMappingURL=save-api-response.decorator.js.map