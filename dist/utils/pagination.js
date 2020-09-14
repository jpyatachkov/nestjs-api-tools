"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageAndSizeToSkipAndTake = void 0;
exports.pageAndSizeToSkipAndTake = (page, size, defaultSize) => {
    const take = size === null ? null : size > 0 ? size : defaultSize;
    const skip = page <= 1 ? 0 : (page - 1) * size;
    return [skip, take];
};
//# sourceMappingURL=pagination.js.map