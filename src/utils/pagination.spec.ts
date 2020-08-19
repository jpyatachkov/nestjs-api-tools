import {pageAndSizeToSkipAndTake} from './pagination';

describe('pageAndSizeToSkipAndTake', () => {
  const DEFAULT_SIZE = 900;

  describe.each([
    [1, 15, 0, 15],
    [7, 15, 90, 15],
    [-1, 15, 0, 15],
    [null, 15, 0, 15],
    [1, -1, 0, DEFAULT_SIZE],
    [1, null, 0, null],
  ])('page %o, size %o, skip %o, take %o', (page: number, size: number, skip: number, take: number) => {
    it('должна преобразовывать номер страницы и ее размер к offset и limit', () => {
      const [actualSkip, actualTake] = pageAndSizeToSkipAndTake(page, size, DEFAULT_SIZE);

      expect(actualSkip).toEqual(skip);
      expect(actualTake).toEqual(take);
    });
  });
});
