"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTransformer = void 0;
const luxon_1 = require("luxon");
const utils_1 = require("../utils");
class DateTransformer {
    from(value) {
        return utils_1.parseDateTime(value);
    }
    to(value) {
        if (!value || value.toString().match(/^\d{4}-\d{2}-\d{2}$/)) {
            return value;
        }
        const format = 'yyyy-MM-dd';
        if (value instanceof luxon_1.DateTime) {
            return value.toFormat(format);
        }
        if (value instanceof Date) {
            return luxon_1.DateTime.fromJSDate(value).toFormat(format);
        }
    }
}
exports.DateTransformer = DateTransformer;
//# sourceMappingURL=date.transformer.js.map