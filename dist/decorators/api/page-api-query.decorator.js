"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageApiQuery = void 0;
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("@/constants");
exports.PageApiQuery = () => swagger_1.ApiQuery({ name: constants_1.PAGE_PARAM, type: Number, required: false });
//# sourceMappingURL=page-api-query.decorator.js.map