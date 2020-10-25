import {ColumnOptions, UpdateDateColumn} from 'typeorm';

import {DateTimeTransformer} from '../../transformers';

/**
 * When entity has been updated.
 * @param options
 */
export const UpdatedAt = (options?: ColumnOptions): PropertyDecorator => UpdateDateColumn({
  transformer: new DateTimeTransformer(),
  type: 'timestamp with time zone',
  ...(options || {}),
});
