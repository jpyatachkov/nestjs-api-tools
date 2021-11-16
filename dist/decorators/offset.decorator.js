"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Offset = void 0;
const constants_1 = require("../constants");
const common_1 = require("@nestjs/common");
exports.Offset = (0, common_1.createParamDecorator)((options = { defaultOffset: 0, offsetParam: constants_1.OFFSET_PARAM }, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return parseInt(request.query[options.offsetParam]) || options.defaultOffset;
});
//# sourceMappingURL=offset.decorator.js.map