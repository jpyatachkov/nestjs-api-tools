"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replacer = void 0;
function replacer(obj, keysToExclude) {
    Object.keys(obj).forEach((k) => {
        if (keysToExclude.includes(k)) {
            delete obj[k];
        }
    });
    return obj;
}
exports.replacer = replacer;
//# sourceMappingURL=replacer.js.map