"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyWithValidation = void 0;
const common_1 = require("@nestjs/common");
const pipes_1 = require("../pipes");
exports.BodyWithValidation = () => common_1.Body(pipes_1.ValidationPipe);
//# sourceMappingURL=body-with-validation.decorator.js.map