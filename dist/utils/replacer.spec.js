"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const replacer_1 = require("./replacer");
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
//# sourceMappingURL=replacer.spec.js.map