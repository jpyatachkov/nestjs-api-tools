"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffsetApiQuery = void 0;
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("../../constants");
const OffsetApiQuery = () => (0, swagger_1.ApiQuery)({ name: constants_1.OFFSET_PARAM, type: Number, required: false });
exports.OffsetApiQuery = OffsetApiQuery;
//# sourceMappingURL=offset-api-query.decorator.js.map