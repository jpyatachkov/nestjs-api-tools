import {DateTime} from 'luxon';
import {parseDateTime} from './datetime';

describe('datetime', () => {
  describe('parseDateTime', () => {
    describe.each([
      null,
      undefined,
      '11.01.1998',
      '01/09/2001',
      '2020-12-03   21:05',
      '2020-12-03 21 : 05',
    ])('v = %o', (v: any) => {
      it('shouls return null if input cannot be parsed as luxon.DateTime', () => {
        expect(parseDateTime(v)).toBeNull();
      });
    });

    describe.each([
      '2020-01-01',
      '2021-01-26T11:12:54.000+03:00',
      '2021-01-26T11:12:54',
      '2020-12-03 21:05:51+00',
      new Date(),
      1600275033,
      1600275033000,
      DateTime.local(),
    ])('v = %o', (v: any) => {
      it('should return DateTime if input can be parsed as luxon.DateTime', () => {
        const dt = parseDateTime(v);
        expect(dt).toBeInstanceOf(DateTime);
        expect(dt.isValid).toBeTruthy();
      });
    });
  });
});
