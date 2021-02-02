"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyWithTrim = void 0;
const common_1 = require("@nestjs/common");
const pipes_1 = require("../../pipes");
exports.BodyWithTrim = () => common_1.applyDecorators(common_1.UsePipes(new pipes_1.TrimPipe()));
//# sourceMappingURL=body-with-trim.decorator.js.map