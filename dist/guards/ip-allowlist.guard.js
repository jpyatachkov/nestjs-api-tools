"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var IpAllowlistGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpAllowlistGuard = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
let IpAllowlistGuard = IpAllowlistGuard_1 = class IpAllowlistGuard {
    constructor(options) {
        this.options = options;
        this.logger = new common_1.Logger(IpAllowlistGuard_1.name);
    }
    canActivate(context) {
        if (this.options.debug) {
            return true;
        }
        const req = context.switchToHttp().getRequest();
        const ip = req.ip;
        this.logger.error(`IP ${ip} TRIES TO ACCESS ${req.path}`);
        if (!this.options.allowedIps.includes(ip)) {
            this.logger.error(`IP ${ip} ACCESS TO ${req.path} DENIED`);
            return false;
        }
        else {
            this.logger.error(`IP ${ip} ACCESS TO ${req.path} ALLOWED`);
        }
        return true;
    }
};
IpAllowlistGuard = IpAllowlistGuard_1 = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.IP_ALLOWLIST_GUARD_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], IpAllowlistGuard);
exports.IpAllowlistGuard = IpAllowlistGuard;
//# sourceMappingURL=ip-allowlist.guard.js.map