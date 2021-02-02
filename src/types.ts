export type ApplyDecoratorsType = <Y>(target: any, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

export type TransformDecoratorType = (target: any, key: string) => void;
