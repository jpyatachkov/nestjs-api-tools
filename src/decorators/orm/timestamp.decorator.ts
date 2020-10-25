import {Column, ColumnOptions} from 'typeorm';

import {DateTimeTransformer} from '../../transformers';

/**
 * Any timestamp.
 * @param options
 */
export const Timestamp = (options?: ColumnOptions): PropertyDecorator => Column({
  transformer: new DateTimeTransformer(),
  type: 'timestamp with time zone',
  ...(options || {}),
});
