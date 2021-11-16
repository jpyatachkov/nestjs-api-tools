"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatedBy = void 0;
const typeorm_1 = require("typeorm");
const UpdatedBy = (options = { default: 'user' }) => (0, typeorm_1.Column)({
    type: 'text',
    ...(options || {}),
});
exports.UpdatedBy = UpdatedBy;
//# sourceMappingURL=updated-by.decorator.js.map