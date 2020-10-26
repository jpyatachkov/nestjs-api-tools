"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsDate = exports.transformAsDate = void 0;
const class_transformer_1 = require("class-transformer");
exports.transformAsDate = (v) => (v === null || v === void 0 ? void 0 : v.toISODate()) || null;
exports.AsDate = () => class_transformer_1.Transform(exports.transformAsDate);
//# sourceMappingURL=as-date.decorator.js.map