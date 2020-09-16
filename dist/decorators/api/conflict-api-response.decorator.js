"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictApiResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const interfaces_1 = require("../../interfaces");
exports.ConflictApiResponse = (description = 'Конфликт: невозможно создать ресурс или создаваемый ресурс уже существует') => swagger_1.ApiConflictResponse({
    description,
    type: interfaces_1.ApiErrorResponse,
});
//# sourceMappingURL=conflict-api-response.decorator.js.map