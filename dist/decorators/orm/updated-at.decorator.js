"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatedAt = void 0;
const typeorm_1 = require("typeorm");
const transformers_1 = require("../../transformers");
const UpdatedAt = (options) => (0, typeorm_1.UpdateDateColumn)({
    transformer: new transformers_1.DateTimeTransformer(),
    type: 'timestamp with time zone',
    ...(options || {}),
});
exports.UpdatedAt = UpdatedAt;
//# sourceMappingURL=updated-at.decorator.js.map