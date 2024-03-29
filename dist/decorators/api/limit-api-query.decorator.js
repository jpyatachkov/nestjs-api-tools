"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitApiQuery = void 0;
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("../../constants");
const LimitApiQuery = () => (0, swagger_1.ApiQuery)({ name: constants_1.LIMIT_PARAM, type: Number, required: false });
exports.LimitApiQuery = LimitApiQuery;
//# sourceMappingURL=limit-api-query.decorator.js.map