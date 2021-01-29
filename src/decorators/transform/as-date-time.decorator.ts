import {DateTime} from 'luxon';
import {Transform} from 'class-transformer';
import {TransformDecoratorType} from '../../types';

export const transformAsDateTime = (v: DateTime): string | null => typeof v?.toISO === 'function' ? v.toISO() : null;

/**
 * Transforms luxon.DateTime to ISO full datetime string.
 */
export const AsDateTime = (): TransformDecoratorType => Transform(transformAsDateTime);
