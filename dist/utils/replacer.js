"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceRussianLettersForSearch = exports.replacer = exports.createJsonReplacer = void 0;
const lodash_1 = require("lodash");
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
function replaceRussianLettersForSearch(search) {
    if (lodash_1.isString(search) && search.length) {
        return search.replace(/ё/g, 'е');
    }
    return search;
}
exports.replaceRussianLettersForSearch = replaceRussianLettersForSearch;
//# sourceMappingURL=replacer.js.map