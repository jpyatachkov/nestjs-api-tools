"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serialization = void 0;
const common_1 = require("@nestjs/common");
exports.Serialization = () => common_1.UseInterceptors(common_1.ClassSerializerInterceptor);
//# sourceMappingURL=serialization.decorator.js.map