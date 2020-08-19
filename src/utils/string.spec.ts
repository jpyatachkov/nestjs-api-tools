import {capitalize, isEmpty, joinStrings} from './string';

describe('capitalize', () => {
  describe.each([
    ['', ''],
    ['word', 'Word'],
    ['Word', 'Word'],
    ['wORd', 'WORd'],
    ['first second', 'First second'],
  ])('%s => %s', (str: string, expected: string) => {
    it('should capitalize first letter', () => {
      expect(capitalize(str)).toEqual(expected);
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
  ])('%s => %s', (delimiter: string, strings: string[], expected: string) => {
    it('should join strings with delimiter', () => {
      expect(joinStrings(delimiter, ...strings)).toEqual(expected);
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
  ])('%s => %s', (str: string, expected: boolean) => {
    it('should check whether string is empty or not defined', () => {
      expect(isEmpty(str)).toEqual(expected);
    });
  });
});
