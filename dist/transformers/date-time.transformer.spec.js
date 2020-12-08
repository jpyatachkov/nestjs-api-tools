"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils = __importStar(require("../utils"));
const luxon_1 = require("luxon");
const date_time_transformer_1 = require("./date-time.transformer");
jest.mock('../utils');
describe('DateTimeTransformer', () => {
    let transformer;
    beforeEach(() => {
        transformer = new date_time_transformer_1.DateTimeTransformer();
    });
    describe('from', () => {
        const EXPECTED_FORMAT = 'yyyy-MM-dd HH:mm:ssZ';
        it('should return null if null passed', () => {
            expect(transformer.to(null)).toBeNull();
        });
        it('should return undefined if undefined passed', () => {
            expect(transformer.to(undefined)).toBeUndefined();
        });
        describe.each([
            '2020-06-20 12:00:00+03',
            '2020-06-20T12:00:00Z',
            '2020-06-20',
            '2020-06-20 12:00',
            '2018-11-07T00:25:00.073876Z',
        ])('date string %o', (dateString) => {
            it('should return string as-is if its format is valid', () => {
                expect(transformer.to(dateString)).toEqual(dateString);
            });
        });
        describe.each([
            'sf,ng',
            '2020-06-20 12:00:00+3',
        ])('date string %o', (dateString) => {
            it('should return undefined if passed string format is invalid', () => {
                expect(transformer.to(dateString)).toBeUndefined();
            });
        });
        it('should transform DateTime to format', () => {
            const dt = luxon_1.DateTime.local();
            expect(transformer.to(dt)).toEqual(dt.toFormat(EXPECTED_FORMAT));
        });
        it('should transform Date to format', () => {
            const d = new Date();
            const dt = luxon_1.DateTime.fromJSDate(d);
            expect(transformer.to(d)).toEqual(dt.toFormat(EXPECTED_FORMAT));
        });
        it('should return undefined if value passed cannot be serialized', () => {
            expect(transformer.to([])).toBeUndefined();
        });
    });
    describe('from', () => {
        it('should call parseDateTime to transform to luxon.DateTime', () => {
            transformer.from(null);
            expect(utils.parseDateTime).toBeCalledWith(null);
        });
    });
});
//# sourceMappingURL=date-time.transformer.spec.js.map