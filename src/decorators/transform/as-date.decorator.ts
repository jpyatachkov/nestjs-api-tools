import {DateTime} from 'luxon';
import {Transform} from 'class-transformer';
import {TransformDecoratorType} from '../../types';

export const transformAsDate = (v: DateTime): string | null => v?.toISODate() || null;

/**
 * Transforms luxon.DateTime to ISO date string.
 */
export const AsDate = (): TransformDecoratorType => Transform(transformAsDate);
