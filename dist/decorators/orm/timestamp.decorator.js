"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timestamp = void 0;
const typeorm_1 = require("typeorm");
const transformers_1 = require("../../transformers");
const Timestamp = (options) => (0, typeorm_1.Column)({
    transformer: new transformers_1.DateTimeTransformer(),
    type: 'timestamp with time zone',
    ...(options || {}),
});
exports.Timestamp = Timestamp;
//# sourceMappingURL=timestamp.decorator.js.map