import {Column, ColumnOptions} from 'typeorm';

/**
 * Optimistic lock version.
 * @param options
 */
export const Version = (options?: ColumnOptions): PropertyDecorator => Column({
  type: 'int',
  default: 1,
  ...(options || {}),
});
