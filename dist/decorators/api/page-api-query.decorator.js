"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageApiQuery = void 0;
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("../../constants");
const PageApiQuery = () => (0, swagger_1.ApiQuery)({ name: constants_1.PAGE_PARAM, type: Number, required: false });
exports.PageApiQuery = PageApiQuery;
//# sourceMappingURL=page-api-query.decorator.js.map