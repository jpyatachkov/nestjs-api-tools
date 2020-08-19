"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const parse_date_pipe_1 = require("./parse-date.pipe");
const faker_1 = __importDefault(require("faker"));
describe('ParseDatePipe', () => {
    let pipe;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                parse_date_pipe_1.ParseDatePipe,
            ],
        }).compile();
        pipe = module.get(parse_date_pipe_1.ParseDatePipe);
    });
    it('should be defined', () => {
        expect(pipe).toBeDefined();
    });
    describe('transform', () => {
        it('should transform string to date', () => {
            const dateString = '2020-01-01';
            const expected = new Date(dateString);
            expect(pipe.transform(dateString)).toEqual(expected);
        });
        it('should return NaN if string is not date', () => {
            expect(pipe.transform(faker_1.default.random.word())).toBeNaN();
        });
    });
});
//# sourceMappingURL=parse-date.pipe.spec.js.map