import {DateTime} from 'luxon';
import {Transform} from 'class-transformer';
import {TransformDecoratorType} from '../../types';
import {parseDateTime} from '../../utils';

export const transformAsDate = (v: DateTime): string | null => {
  const parsed = parseDateTime(v);
  return typeof parsed?.toISODate === 'function' ? parsed.toISODate() : null;
};

/**
 * Transforms luxon.DateTime to ISO date string.
 */
export const AsDate = (): TransformDecoratorType => Transform(transformAsDate);
