"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const typeorm_1 = require("typeorm");
exports.Order = (options) => typeorm_1.Column({
    type: 'int',
    nullable: true,
    name: 'order_',
    ...(options || {}),
});
//# sourceMappingURL=order.decorator.js.map