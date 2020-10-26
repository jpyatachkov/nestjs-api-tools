import {DateTime} from 'luxon';
import faker from 'faker';
import {transformAsDate} from './as-date.decorator';

describe('AsDate', () => {
  it('should return null if object cannot be transformed to ISO-string', () => {
    expect(transformAsDate(null)).toBeNull();
  });

  it('should return ISO-string', () => {
    const v = DateTime.fromJSDate(faker.date.past());
    expect(transformAsDate(v)).toEqual(v.toISODate());
  });
});
