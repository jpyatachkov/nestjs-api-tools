"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guid = void 0;
const typeorm_1 = require("typeorm");
exports.Guid = (options) => {
    const column = typeorm_1.Column({
        unique: true,
        ...(options || {}),
    });
    const uuid = typeorm_1.Generated('uuid');
    return (target, propertyKey) => {
        column(target, propertyKey);
        uuid(target, propertyKey);
    };
};
//# sourceMappingURL=guid.decorator.js.map