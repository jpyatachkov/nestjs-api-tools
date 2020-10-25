import {DateTime} from 'luxon';
import {parseDateTime} from './datetime';

describe('datetime', () => {
  describe('parseDateTime', () => {
    describe.each([
      null,
      undefined,
      '11.01.1998',
      '01/09/2001',
    ])('v = %o', (v: any) => {
      it('shouls return null if input cannot be parsed as luxon.DateTime', () => {
        expect(parseDateTime(v)).toBeNull();
      });
    });

    describe.each([
      '2020-01-01',
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
