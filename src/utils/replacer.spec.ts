import {replacer} from './replacer';

describe('replacer', () => {
  describe.each([
    [{name: 'Sergey', age: 20}, ['name', 'age'], {}],
    [{name: 'Sergey', age: 20}, ['age'], {name: 'Sergey'}],
    [{name: 'Sergey', age: 20}, [], {name: 'Sergey', age: 20}],
    [{name: 'Sergey', age: 20}, ['test'], {name: 'Sergey', age: 20}],
  ])(
    'obj %o keysToExclude %s',
    (obj: Record<string, any>, keysToExclude: string[], result: Record<string, any>) => {
      it('should return object without excluded fields', () => {
        expect(replacer(obj, keysToExclude)).toEqual(result);
      });
    },
  );
});
