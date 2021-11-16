"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const Order = (options) => (0, typeorm_1.Column)({
    type: 'int',
    nullable: true,
    name: 'order_',
    ...(options || {}),
});
exports.Order = Order;
//# sourceMappingURL=order.decorator.js.map