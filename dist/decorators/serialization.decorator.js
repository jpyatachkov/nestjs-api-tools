"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serialization = void 0;
const common_1 = require("@nestjs/common");
const Serialization = () => (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor);
exports.Serialization = Serialization;
//# sourceMappingURL=serialization.decorator.js.map