"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Size = void 0;
const constants_1 = require("../constants");
const common_1 = require("@nestjs/common");
exports.Size = (0, common_1.createParamDecorator)((options = {
    defaultSize: 100,
    maxSize: 500,
    sizeParam: constants_1.SIZE_PARAM,
}, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const size = parseInt(request.query[options.sizeParam]) || options.defaultSize;
    return (size > options.maxSize) ? options.maxSize : size;
});
//# sourceMappingURL=size.decorator.js.map