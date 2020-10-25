import {Column, ColumnOptions} from 'typeorm';

/**
 * Who has updated the entity (user or inner system).
 * @param options
 */
export const UpdatedBy = (options: ColumnOptions = {default: 'user'}): PropertyDecorator => Column({
  type: 'text',
  ...(options || {}),
});
