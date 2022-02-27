"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const max_value_pipe_1 = require("./max-value.pipe");
describe('MaxValuePipe', () => {
    describe('transform', () => {
        it('should throw exception if value bigger then maximum', () => {
            const max = 1;
            const pipe = new max_value_pipe_1.MaxValuePipe(max);
            try {
                pipe.transform(max + 1);
            }
            catch (e) {
                expect(e).toBeInstanceOf(common_1.BadRequestException);
            }
            expect.hasAssertions();
        });
        describe.each([
            [1, 0],
            [1, ''],
            [1, 1],
        ])('max: %o, value: %o', (max, value) => {
            it('should do nothing if value fits limits', () => {
                const pipe = new max_value_pipe_1.MaxValuePipe(max);
                expect(pipe.transform(value)).toEqual(value);
            });
        });
    });
});
//# sourceMappingURL=max-value.pipe.spec.js.map