import {DateTime} from 'luxon';
import faker from 'faker';
import {transformAsDateTime} from './as-date-time.decorator';

describe('AsDateTime', () => {
  it('should return null if input cannot be transformed to ISO-string', () => {
    expect(transformAsDateTime(null)).toBeNull();
  });

  it('should return ISO-string', () => {
    const v = DateTime.fromJSDate(faker.date.past());
    expect(transformAsDateTime(v)).toEqual(v.toISO());
  });
});
