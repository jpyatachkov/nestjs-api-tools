import {ValidationArguments, ValidationOptions, registerDecorator} from 'class-validator';

export type IsNotNullDecoratorType = (object: any, propertyName: string) => void;

/**
 * Checks whether field is STRICTLY EQUAL to null.
 * @param validationOptions
 */
export const IsNotNull = (validationOptions?: ValidationOptions): IsNotNullDecoratorType => (object: any, propertyName: string) => registerDecorator({
  name: 'isNotNull',
  target: object.constructor,
  propertyName: propertyName,
  options: validationOptions,
  validator: {
    validate: (value: any, args: ValidationArguments) => (args.object as any)[propertyName] !== null,
  },
});
