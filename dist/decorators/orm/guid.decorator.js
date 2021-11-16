"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guid = void 0;
const typeorm_1 = require("typeorm");
const Guid = (options) => {
    const column = (0, typeorm_1.Column)({
        unique: true,
        ...(options || {}),
    });
    const uuid = (0, typeorm_1.Generated)('uuid');
    return (target, propertyKey) => {
        column(target, propertyKey);
        uuid(target, propertyKey);
    };
};
exports.Guid = Guid;
//# sourceMappingURL=guid.decorator.js.map