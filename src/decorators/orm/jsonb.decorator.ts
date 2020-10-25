import {Column, ColumnOptions} from 'typeorm';

/**
 * Entity options.
 * @param options
 */
export const Jsonb = (options?: ColumnOptions): PropertyDecorator => Column({
  type: 'jsonb',
  default: {},
  ...(options || {}),
});
