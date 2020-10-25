"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatedAt = void 0;
const typeorm_1 = require("typeorm");
const transformers_1 = require("../../transformers");
exports.UpdatedAt = (options) => typeorm_1.UpdateDateColumn({
    transformer: new transformers_1.DateTimeTransformer(),
    type: 'timestamp with time zone',
    ...(options || {}),
});
//# sourceMappingURL=updated-at.decorator.js.map