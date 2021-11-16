"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version = void 0;
const typeorm_1 = require("typeorm");
const Version = (options) => (0, typeorm_1.Column)({
    type: 'int',
    default: 1,
    ...(options || {}),
});
exports.Version = Version;
//# sourceMappingURL=version.decorator.js.map