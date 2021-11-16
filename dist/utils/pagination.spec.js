"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pagination_1 = require("./pagination");
describe('pageAndSizeToSkipAndTake', () => {
    const DEFAULT_SIZE = 900;
    describe.each([
        [1, 15, 0, 15],
        [7, 15, 90, 15],
        [-1, 15, 0, 15],
        [null, 15, 0, 15],
        [1, -1, 0, DEFAULT_SIZE],
        [1, null, 0, null],
    ])('page %o, size %o, skip %o, take %o', (page, size, skip, take) => {
        it('should transform page and size to offset and limit', () => {
            const [actualSkip, actualTake] = (0, pagination_1.pageAndSizeToSkipAndTake)(page, size, DEFAULT_SIZE);
            expect(actualSkip).toEqual(skip);
            expect(actualTake).toEqual(take);
        });
    });
});
//# sourceMappingURL=pagination.spec.js.map