"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsDate = exports.transformAsDate = void 0;
const class_transformer_1 = require("class-transformer");
const utils_1 = require("../../utils");
exports.transformAsDate = (v) => {
    const parsed = utils_1.parseDateTime(v);
    return typeof (parsed === null || parsed === void 0 ? void 0 : parsed.toISODate) === 'function' ? parsed.toISODate() : null;
};
exports.AsDate = () => class_transformer_1.Transform(exports.transformAsDate);
//# sourceMappingURL=as-date.decorator.js.map