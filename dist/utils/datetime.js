"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDateTime = void 0;
const luxon_1 = require("luxon");
function parseDateTime(v) {
    if (!v) {
        return null;
    }
    if (v instanceof luxon_1.DateTime) {
        return v;
    }
    const fromISO = luxon_1.DateTime.fromISO(v);
    if (fromISO.isValid) {
        return fromISO;
    }
    const fromJS = luxon_1.DateTime.fromJSDate(v);
    if (fromJS.isValid) {
        return fromJS;
    }
    try {
        const fromMillis = luxon_1.DateTime.fromMillis(v);
        if (fromMillis.isValid) {
            return fromMillis;
        }
        const fromSecond = luxon_1.DateTime.fromSeconds(v);
        if (fromSecond.isValid) {
            return fromSecond;
        }
    }
    catch (e) {
        return null;
    }
    return null;
}
exports.parseDateTime = parseDateTime;
//# sourceMappingURL=datetime.js.map