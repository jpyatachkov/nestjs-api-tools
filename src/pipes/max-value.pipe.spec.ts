import {BadRequestException} from '@nestjs/common';
import {MaxValuePipe} from './max-value.pipe';

describe('MaxValuePipe', () => {
  describe('transform', () => {
    it('should throw exception if value bigger then maximum', () => {
      const max = 1;
      const pipe = new MaxValuePipe(max);

      try {
        pipe.transform(max + 1);
      } catch (e) {
        expect(e).toBeInstanceOf(BadRequestException);
      }

      expect.hasAssertions();
    });

    describe.each([
      [1, 0],
      [1, ''],
      [1, 1],
    ])('max: %o, value: %o', (max: number, value: any) => {
      it('should do nothing if value fits limits', () => {
        const pipe = new MaxValuePipe(max);
        expect(pipe.transform(value)).toEqual(value);
      });
    });
  });
});
