"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const replacer_1 = require("./replacer");
describe('replacer', () => {
    describe('createJsonReplacer', () => {
        it('should create replacer function', () => {
            const object = { a: 1, b: 2, c: 3 };
            const fieldsToExclude = ['a', 'e'];
            const replacerFunction = replacer_1.createJsonReplacer(fieldsToExclude);
            Object
                .entries(object)
                .forEach(([k, v]) => {
                if (fieldsToExclude.includes(k)) {
                    expect(replacerFunction(k, v)).toBeUndefined();
                }
                else {
                    expect(replacerFunction(k, v)).toEqual(v);
                }
            });
        });
    });
    describe('replacer', () => {
        describe.each([
            [{ name: 'Sergey', age: 20 }, ['name', 'age'], {}],
            [{ name: 'Sergey', age: 20 }, ['age'], { name: 'Sergey' }],
            [{ name: 'Sergey', age: 20 }, [], { name: 'Sergey', age: 20 }],
            [{ name: 'Sergey', age: 20 }, ['test'], { name: 'Sergey', age: 20 }],
        ])('obj %o keysToExclude %s', (obj, keysToExclude, result) => {
            it('should return object without excluded fields', () => {
                expect(replacer_1.replacer(obj, keysToExclude)).toEqual(result);
            });
        });
    });
    describe('replaceRussianLettersForSearch', () => {
        describe.each([
            [null],
            [undefined],
            [[]],
            [''],
        ])('search: %o', (search) => {
            it('should leave search unchanged if its is not string', () => {
                expect(replacer_1.replaceRussianLettersForSearch(search)).toEqual(search);
            });
        });
        describe.each([
            ['sfg', 'sfg'],
            ['мама мыла раму', 'мама мыла раму'],
            ['Королёк - птица певчая', 'Королек - птица певчая'],
            ['еееёёёёёее', 'ееееееееее'],
        ])('search: %o, expected: %o', (search, expected) => {
            it('should replace е to ё', () => {
                expect(replacer_1.replaceRussianLettersForSearch(search)).toEqual(expected);
            });
        });
    });
});
//# sourceMappingURL=replacer.spec.js.map