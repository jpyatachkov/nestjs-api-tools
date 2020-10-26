"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyWithValidation = void 0;
const common_1 = require("@nestjs/common");
exports.BodyWithValidation = () => common_1.Body(new common_1.ValidationPipe({ whitelist: true }));
//# sourceMappingURL=body-with-validation.decorator.js.map