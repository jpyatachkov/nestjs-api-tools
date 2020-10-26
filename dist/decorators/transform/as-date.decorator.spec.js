"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const faker_1 = __importDefault(require("faker"));
const as_date_decorator_1 = require("./as-date.decorator");
describe('AsDate', () => {
    it('should return null if object cannot be transformed to ISO-string', () => {
        expect(as_date_decorator_1.transformAsDate(null)).toBeNull();
    });
    it('should return ISO-string', () => {
        const v = luxon_1.DateTime.fromJSDate(faker_1.default.date.past());
        expect(as_date_decorator_1.transformAsDate(v)).toEqual(v.toISODate());
    });
});
//# sourceMappingURL=as-date.decorator.spec.js.map