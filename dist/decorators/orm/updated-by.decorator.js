"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatedBy = void 0;
const typeorm_1 = require("typeorm");
exports.UpdatedBy = (options = { default: 'user' }) => typeorm_1.Column({
    type: 'text',
    ...(options || {}),
});
//# sourceMappingURL=updated-by.decorator.js.map