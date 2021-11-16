"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jsonb = void 0;
const typeorm_1 = require("typeorm");
const Jsonb = (options) => (0, typeorm_1.Column)({
    type: 'jsonb',
    default: {},
    ...(options || {}),
});
exports.Jsonb = Jsonb;
//# sourceMappingURL=jsonb.decorator.js.map