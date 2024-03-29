"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsDateTime = exports.transformAsDateTime = void 0;
const class_transformer_1 = require("class-transformer");
const utils_1 = require("../../utils");
const transformAsDateTime = (v) => {
    var _a, _b;
    const parsed = (0, utils_1.parseDateTime)((_b = (_a = v) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : v);
    return typeof (parsed === null || parsed === void 0 ? void 0 : parsed.toISO) === 'function' ? parsed.toISO() : null;
};
exports.transformAsDateTime = transformAsDateTime;
const AsDateTime = () => (0, class_transformer_1.Transform)(exports.transformAsDateTime);
exports.AsDateTime = AsDateTime;
//# sourceMappingURL=as-date-time.decorator.js.map