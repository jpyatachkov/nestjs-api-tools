import { ValidationOptions } from 'class-validator';
export declare type IsNotNullDecoratorType = (object: any, propertyName: string) => void;
export declare const IsNotNull: (validationOptions?: ValidationOptions) => IsNotNullDecoratorType;
