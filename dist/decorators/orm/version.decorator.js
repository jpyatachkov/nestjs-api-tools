"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version = void 0;
const typeorm_1 = require("typeorm");
exports.Version = (options) => typeorm_1.Column({
    type: 'int',
    default: 1,
    ...(options || {}),
});
//# sourceMappingURL=version.decorator.js.map