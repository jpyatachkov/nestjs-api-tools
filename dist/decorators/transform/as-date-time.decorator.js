"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsDateTime = exports.transformAsDateTime = void 0;
const class_transformer_1 = require("class-transformer");
exports.transformAsDateTime = (v) => typeof (v === null || v === void 0 ? void 0 : v.toISO) === 'function' ? v.toISO() : null;
exports.AsDateTime = () => class_transformer_1.Transform(exports.transformAsDateTime);
//# sourceMappingURL=as-date-time.decorator.js.map