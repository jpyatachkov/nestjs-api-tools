"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeApiQuery = void 0;
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("../../constants");
const SizeApiQuery = () => (0, swagger_1.ApiQuery)({ name: constants_1.SIZE_PARAM, type: Number, required: false });
exports.SizeApiQuery = SizeApiQuery;
//# sourceMappingURL=size-api-query.decorator.js.map