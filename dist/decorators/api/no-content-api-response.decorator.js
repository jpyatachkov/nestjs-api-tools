"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoContentApiResponse = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
exports.NoContentApiResponse = (options) => common_1.applyDecorators(common_1.HttpCode(common_1.HttpStatus.NO_CONTENT), swagger_1.ApiNoContentResponse(options));
//# sourceMappingURL=no-content-api-response.decorator.js.map