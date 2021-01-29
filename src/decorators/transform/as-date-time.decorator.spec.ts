import {DateTime} from 'luxon';
import faker from 'faker';
import {transformAsDateTime} from './as-date-time.decorator';

describe('AsDateTime', () => {
  it('should return null if input cannot be transformed to ISO-string', () => {
    expect(transformAsDateTime(null)).toBeNull();
  });

  describe.each([
    DateTime.fromJSDate(faker.date.past()),
    '2021-01-26T11:12:54.000+03:00',
    '2020-12-03 21:05:51+00',
  ])('v: %s', (v: unknown) => {
    it('should return ISO-string', () => {
      expect(transformAsDateTime(v as any)).toMatch(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)$/);
    });
  });
});
