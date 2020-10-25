import * as utils from '../utils';

import {DateTime} from 'luxon';
import {DateTransformer} from './date.transformer';

jest.mock('../utils');

describe('DateTransformer', () => {
  let transformer: DateTransformer;

  beforeEach(() => {
    transformer = new DateTransformer();
  });

  describe('from', () => {
    const EXPECTED_FORMAT = 'yyyy-MM-dd';

    it('should return null if null passed', () => {
      expect(transformer.to(null)).toBeNull();
    });

    it('should return undefined if undefined passed', () => {
      expect(transformer.to(undefined)).toBeUndefined();
    });

    it('should return string as-is if its format is valid', () => {
      expect(transformer.to('2020-06-20')).toEqual('2020-06-20');
    });

    describe.each([
      'sf,ng',
      '2020-06-20T12:00:00Z',
      '2020-06-2',
      '2020-06-20 12:00',
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
