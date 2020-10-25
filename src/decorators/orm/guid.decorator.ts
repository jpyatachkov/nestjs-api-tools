import {Column, ColumnOptions, Generated} from 'typeorm';

/**
 * Column for secondary unique key (for example, cross-system).
 * @param options
 */
export const Guid = (options?: ColumnOptions): PropertyDecorator => {
  const column = Column({
    unique: true,
    ...(options || {}),
  });
  const uuid = Generated('uuid');

  return (target, propertyKey) => {
    column(target, propertyKey);
    uuid(target, propertyKey);
  };
};
