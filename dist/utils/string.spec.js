"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("./string");
describe('capitalize', () => {
    describe.each([
        ['', ''],
        ['word', 'Word'],
        ['Word', 'Word'],
        ['wORd', 'WORd'],
        ['first second', 'First second'],
    ])('%s => %s', (str, expected) => {
        it('should capitalize first letter', () => {
            expect((0, string_1.capitalize)(str)).toEqual(expected);
        });
    });
});
describe('joinStrings', () => {
    describe.each([
        ['', [], ''],
        ['/', [], ''],
        ['', ['a'], 'a'],
        ['', ['a', 'b'], 'ab'],
        ['/', ['a'], 'a'],
        ['/', ['a', 'b'], 'a/b'],
        ['/', ['/a/', '/b/'], 'a/b'],
        ['/', ['/', '/a/', '/b/'], 'a/b'],
    ])('%s => %s', (delimiter, strings, expected) => {
        it('should join strings with delimiter', () => {
            expect((0, string_1.joinStrings)(delimiter, ...strings)).toEqual(expected);
        });
    });
});
describe('isEmpty', () => {
    describe.each([
        ['', true],
        ['        ', true],
        [null, true],
        [undefined, true],
        ['a', false],
        ['    f       ', false],
        ['undefined', false],
    ])('%s => %s', (str, expected) => {
        it('should check whether string is empty or not defined', () => {
            expect((0, string_1.isEmpty)(str)).toEqual(expected);
        });
    });
});
//# sourceMappingURL=string.spec.js.map