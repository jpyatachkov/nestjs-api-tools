"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const constants_1 = require("../constants");
const common_1 = require("@nestjs/common");
exports.Page = (0, common_1.createParamDecorator)((options = { defaultPage: 1, pageParam: constants_1.PAGE_PARAM }, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const page = parseInt(request.query[options.pageParam]) || options.defaultPage;
    return page > constants_1.POSTGRES_MAX_INT ? constants_1.POSTGRES_MAX_INT : page;
});
//# sourceMappingURL=page.decorator.js.map