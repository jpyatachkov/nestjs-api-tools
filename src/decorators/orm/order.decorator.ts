import {Column, ColumnOptions} from 'typeorm';

/**
 * Entity sort order.
 * @param options
 */
export const Order = (options?: ColumnOptions): PropertyDecorator => Column({
  type: 'int',
  nullable: true,
  name: 'order_',
  ...(options || {}),
});
