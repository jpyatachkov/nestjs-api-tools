import * as utils from '../utils';

import {DateTime} from 'luxon';
import {DateTimeTransformer} from './date-time.transformer';

jest.mock('../utils');

describe('DateTimeTransformer', () => {
  let transformer: DateTimeTransformer;

  beforeEach(() => {
    transformer = new DateTimeTransformer();
  });

  describe('from', () => {
    const EXPECTED_FORMAT = 'yyyy-MM-dd HH:mm:ssZ';

    it('should return null if null passed', () => {
      expect(transformer.to(null)).toBeNull();
    });

    it('should return undefined if undefined passed', () => {
      expect(transformer.to(undefined)).toBeUndefined();
    });

    describe.each([
      '2020-06-20 12:00:00+03',
      '2020-06-20T12:00:00Z',
      '2020-06-20',
      '2020-06-20 12:00',
      '2018-11-07T00:25:00.073876Z',
    ])('date string %o', (dateString: string) => {
      it('should return string as-is if its format is valid', () => {
        expect(transformer.to(dateString)).toEqual(dateString);
      });
    });

    describe.each([
      'sf,ng',
      '2020-06-20 12:00:00+3',
    ])('date string %o', (dateString: string) => {
      it('should return undefined if passed string format is invalid', () => {
        expect(transformer.to(dateString)).toBeUndefined();
      });
    });

    it('should transform DateTime to format', () => {
      const dt = DateTime.local();
      expect(transformer.to(dt)).toEqual(dt.toFormat(EXPECTED_FORMAT));
    });

    it('should transform Date to format', () => {
      const d = new Date();
      const dt = DateTime.fromJSDate(d);
      expect(transformer.to(d)).toEqual(dt.toFormat(EXPECTED_FORMAT));
    });

    it('should return undefined if value passed cannot be serialized', () => {
      expect(transformer.to([] as any)).toBeUndefined();
    });
  });

  describe('from', () => {
    it('should call parseDateTime to transform to luxon.DateTime', () => {
      transformer.from(null);
      expect(utils.parseDateTime).toBeCalledWith(null);
    });
  });
});
