"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsDateTime = exports.transformAsDateTime = void 0;
const class_transformer_1 = require("class-transformer");
const utils_1 = require("../../utils");
exports.transformAsDateTime = (v) => {
    const parsed = utils_1.parseDateTime(v);
    return typeof (parsed === null || parsed === void 0 ? void 0 : parsed.toISO) === 'function' ? parsed.toISO() : null;
};
exports.AsDateTime = () => class_transformer_1.Transform(exports.transformAsDateTime);
//# sourceMappingURL=as-date-time.decorator.js.map