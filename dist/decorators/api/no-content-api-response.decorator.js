"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoContentApiResponse = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const NoContentApiResponse = (options) => (0, common_1.applyDecorators)((0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT), (0, swagger_1.ApiNoContentResponse)(options));
exports.NoContentApiResponse = NoContentApiResponse;
//# sourceMappingURL=no-content-api-response.decorator.js.map