"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jsonb = void 0;
const typeorm_1 = require("typeorm");
exports.Jsonb = (options) => typeorm_1.Column({
    type: 'jsonb',
    default: {},
    ...(options || {}),
});
//# sourceMappingURL=jsonb.decorator.js.map