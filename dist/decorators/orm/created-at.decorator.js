"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedAt = void 0;
const typeorm_1 = require("typeorm");
const transformers_1 = require("../../transformers");
const CreatedAt = (options) => (0, typeorm_1.CreateDateColumn)({
    transformer: new transformers_1.DateTimeTransformer(),
    type: 'timestamp with time zone',
    ...(options || {}),
});
exports.CreatedAt = CreatedAt;
//# sourceMappingURL=created-at.decorator.js.map