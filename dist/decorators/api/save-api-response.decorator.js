"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveApiResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const interfaces_1 = require("@/interfaces");
exports.SaveApiResponse = (options) => common_1.applyDecorators(common_1.HttpCode(options.status || common_1.HttpStatus.CREATED), swagger_1.ApiResponse({
    status: options.status || common_1.HttpStatus.CREATED,
    description: options.description,
    type: options.type,
    isArray: options.isArray,
}), swagger_1.ApiBadRequestResponse({
    description: options.errorDescription || 'Некорректное тело запроса',
    type: interfaces_1.ApiError,
}));
//# sourceMappingURL=save-api-response.decorator.js.map