"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpAllowlist = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
exports.IpAllowlist = (...ips) => common_1.SetMetadata(constants_1.IP_ALLOWLIST, ips);
//# sourceMappingURL=ip-allowlist.decorator.js.map