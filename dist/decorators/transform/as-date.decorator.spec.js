"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const faker_1 = __importDefault(require("faker"));
const as_date_decorator_1 = require("./as-date.decorator");
describe('AsDate', () => {
    describe.each([
        null,
        undefined,
        {},
        { value: null },
    ])('v: %s', (v) => {
        it('should return null if object cannot be transformed to ISO-string', () => {
            expect(as_date_decorator_1.transformAsDate(v)).toBeNull();
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
            expect(as_date_decorator_1.transformAsDate(v)).toMatch(/^\d{4}-[01]\d-[0-3]\d$/);
        });
    });
});
//# sourceMappingURL=as-date.decorator.spec.js.map