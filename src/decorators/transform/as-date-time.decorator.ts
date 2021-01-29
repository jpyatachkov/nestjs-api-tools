import {DateTime} from 'luxon';
import {Transform} from 'class-transformer';
import {TransformDecoratorType} from '../../types';
import {parseDateTime} from '../../utils';

export const transformAsDateTime = (v: DateTime): string | null => {
  const parsed = parseDateTime(v);
  return typeof parsed?.toISO === 'function' ? parsed.toISO() : null;
};

/**
 * Transforms luxon.DateTime to ISO full datetime string.
 */
export const AsDateTime = (): TransformDecoratorType => Transform(transformAsDateTime);
