"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = exports.joinStrings = exports.capitalize = void 0;
function capitalize(str) {
    if (!str || !str.length) {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitalize = capitalize;
function joinStrings(delimiter, ...values) {
    return values.map((v) => {
        const startsWith = v.startsWith(delimiter);
        const endsWith = v.endsWith(delimiter);
        let tmp = v;
        if (startsWith) {
            tmp = tmp.substr(delimiter.length);
        }
        if (endsWith) {
            tmp = tmp.substr(0, tmp.length - delimiter.length);
        }
        return tmp;
    })
        .filter(v => !!v.length)
        .join(delimiter);
}
exports.joinStrings = joinStrings;
function isEmpty(str) {
    return !(str || '').trim();
}
exports.isEmpty = isEmpty;
//# sourceMappingURL=string.js.map