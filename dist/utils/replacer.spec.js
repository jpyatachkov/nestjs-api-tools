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
});
//# sourceMappingURL=replacer.spec.js.map