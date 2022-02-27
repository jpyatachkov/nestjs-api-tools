"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Limit = void 0;
const constants_1 = require("../constants");
const common_1 = require("@nestjs/common");
exports.Limit = (0, common_1.createParamDecorator)((options = {
    defaultLimit: 25,
    limitParam: constants_1.LIMIT_PARAM,
    maxLimit: 500,
}, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const limit = parseInt(request.query[options.limitParam]) || options.defaultLimit;
    return limit > options.maxLimit ? options.maxLimit : limit;
});
//# sourceMappingURL=limit.decorator.js.map