"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictIp = void 0;
const common_1 = require("@nestjs/common");
const guards_1 = require("../guards");
exports.RestrictIp = () => common_1.applyDecorators(common_1.UseGuards(guards_1.IpAllowlistGuard));
//# sourceMappingURL=restrict-ip.decorator.js.map