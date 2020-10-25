"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedAt = void 0;
const typeorm_1 = require("typeorm");
const transformers_1 = require("../../transformers");
exports.CreatedAt = (options) => typeorm_1.CreateDateColumn({
    transformer: new transformers_1.DateTimeTransformer(),
    type: 'timestamp with time zone',
    ...(options || {}),
});
//# sourceMappingURL=created-at.decorator.js.map