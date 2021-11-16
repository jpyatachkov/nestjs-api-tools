"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const faker_1 = __importDefault(require("faker"));
const as_date_time_decorator_1 = require("./as-date-time.decorator");
describe('AsDateTime', () => {
    describe.each([
        null,
        undefined,
        {},
        { value: null },
    ])('v: %s', (v) => {
        it('should return null if input cannot be transformed to ISO-string', () => {
            expect((0, as_date_time_decorator_1.transformAsDateTime)(v)).toBeNull();
        });
    });
    describe.each([
        luxon_1.DateTime.fromJSDate(faker_1.default.date.past()),
        '2021-01-26T11:12:54.000+03:00',
        '2020-12-03 21:05:51+00',
        {
            value: luxon_1.DateTime.fromJSDate(faker_1.default.date.past()),
        },
        {
            value: '2021-01-26T11:12:54.000+03:00',
        },
        {
            value: '2020-12-03 21:05:51+00',
        },
    ])('v: %s', (v) => {
        it('should return ISO-string', () => {
            expect((0, as_date_time_decorator_1.transformAsDateTime)(v)).toMatch(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)$/);
        });
    });
});
//# sourceMappingURL=as-date-time.decorator.spec.js.map