"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyWithValidation = void 0;
const common_1 = require("@nestjs/common");
const BodyWithValidation = () => (0, common_1.Body)(new common_1.ValidationPipe({ whitelist: true }));
exports.BodyWithValidation = BodyWithValidation;
//# sourceMappingURL=body-with-validation.decorator.js.map