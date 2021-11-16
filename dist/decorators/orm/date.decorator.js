"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Date = void 0;
const typeorm_1 = require("typeorm");
const transformers_1 = require("../../transformers");
const Date = (options) => (0, typeorm_1.Column)({
    transformer: new transformers_1.DateTransformer(),
    type: 'date',
    ...(options || {}),
});
exports.Date = Date;
//# sourceMappingURL=date.decorator.js.map