"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeTransformer = void 0;
const luxon_1 = require("luxon");
const utils_1 = require("../utils");
class DateTimeTransformer {
    from(value) {
        return utils_1.parseDateTime(value);
    }
    to(value) {
        if (!value || value.toString().match(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\+\d{1,2}$/)) {
            return value;
        }
        const format = 'yyyy-MM-dd HH:mm:ssZ';
        if (value instanceof luxon_1.DateTime) {
            return value.toFormat(format);
        }
        if (value instanceof Date) {
            return luxon_1.DateTime.fromJSDate(value).toFormat(format);
        }
    }
}
exports.DateTimeTransformer = DateTimeTransformer;
//# sourceMappingURL=date-time.transformer.js.map