"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyWithTrim = void 0;
const common_1 = require("@nestjs/common");
const pipes_1 = require("../../pipes");
const BodyWithTrim = () => (0, common_1.applyDecorators)((0, common_1.UsePipes)(new pipes_1.TrimPipe()));
exports.BodyWithTrim = BodyWithTrim;
//# sourceMappingURL=body-with-trim.decorator.js.map