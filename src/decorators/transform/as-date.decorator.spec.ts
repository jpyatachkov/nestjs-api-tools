import {DateTime} from 'luxon';
import faker from 'faker';
import {transformAsDate} from './as-date.decorator';

describe('AsDate', () => {
  it('should return null if object cannot be transformed to ISO-string', () => {
    expect(transformAsDate(null)).toBeNull();
  });

  describe.each([
    DateTime.fromJSDate(faker.date.past()),
    '2021-01-26T11:12:54.000+03:00',
    '2020-12-03 21:05:51+00',
  ])('v: %s', (v: unknown) => {
    it('should return ISO-string', () => {
      expect(transformAsDate(v as any)).toMatch(/^\d{4}-[01]\d-[0-3]\d$/);
    });
  });
});
