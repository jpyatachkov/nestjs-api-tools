"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictIp = void 0;
const common_1 = require("@nestjs/common");
const guards_1 = require("../guards");
const RestrictIp = () => (0, common_1.applyDecorators)((0, common_1.UseGuards)(guards_1.IpAllowlistGuard));
exports.RestrictIp = RestrictIp;
//# sourceMappingURL=restrict-ip.decorator.js.map