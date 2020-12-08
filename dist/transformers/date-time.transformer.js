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
        const format = 'yyyy-MM-dd HH:mm:ssZ';
        if (value instanceof luxon_1.DateTime) {
            return value.toFormat(format);
        }
        if (value instanceof Date) {
            return luxon_1.DateTime.fromJSDate(value).toFormat(format);
        }
        if (!value || value.toString().match(/^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/)) {
            return value;
        }
    }
}
exports.DateTimeTransformer = DateTimeTransformer;
//# sourceMappingURL=date-time.transformer.js.map