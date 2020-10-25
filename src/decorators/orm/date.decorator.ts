import {Column, ColumnOptions} from 'typeorm';

import {DateTransformer} from '../../transformers';

/**
 * Date column (without time).
 * @param options
 */
export const Date = (options?: ColumnOptions): PropertyDecorator => Column({
  transformer: new DateTransformer(),
  type: 'date',
  ...(options || {}),
});
