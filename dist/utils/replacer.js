"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replacer = exports.createJsonReplacer = void 0;
function createJsonReplacer(fieldNamesToExclude) {
    return (key, val) => fieldNamesToExclude.includes(key) ? undefined : val;
}
exports.createJsonReplacer = createJsonReplacer;
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