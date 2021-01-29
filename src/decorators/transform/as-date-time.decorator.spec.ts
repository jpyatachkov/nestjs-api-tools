import {DateTime} from 'luxon';
import faker from 'faker';
import {transformAsDateTime} from './as-date-time.decorator';

describe('AsDateTime', () => {
  describe.each([
    null,
    undefined,
    {},
    {value: null},
  ])('v: %s', (v: unknown) => {
    it('should return null if input cannot be transformed to ISO-string', () => {
      expect(transformAsDateTime(v)).toBeNull();
    });
  });

  describe.each([
    DateTime.fromJSDate(faker.date.past()),
    '2021-01-26T11:12:54.000+03:00',
    '2020-12-03 21:05:51+00',
    {
      value: DateTime.fromJSDate(faker.date.past()),
    },
    {
      value: '2021-01-26T11:12:54.000+03:00',
    },
    {
      value: '2020-12-03 21:05:51+00',
    },
  ])('v: %s', (v: unknown) => {
    it('should return ISO-string', () => {
      expect(transformAsDateTime(v)).toMatch(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)$/);
    });
  });
});
