"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitApiQuery = void 0;
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("@/constants");
exports.LimitApiQuery = () => swagger_1.ApiQuery({ name: constants_1.LIMIT_PARAM, type: Number, required: false });
//# sourceMappingURL=limit-api-query.decorator.js.map