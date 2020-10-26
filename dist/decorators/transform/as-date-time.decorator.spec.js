"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const faker_1 = __importDefault(require("faker"));
const as_date_time_decorator_1 = require("./as-date-time.decorator");
describe('AsDateTime', () => {
    it('should return null if input cannot be transformed to ISO-string', () => {
        expect(as_date_time_decorator_1.transformAsDateTime(null)).toBeNull();
    });
    it('should return ISO-string', () => {
        const v = luxon_1.DateTime.fromJSDate(faker_1.default.date.past());
        expect(as_date_time_decorator_1.transformAsDateTime(v)).toEqual(v.toISO());
    });
});
//# sourceMappingURL=as-date-time.decorator.spec.js.map