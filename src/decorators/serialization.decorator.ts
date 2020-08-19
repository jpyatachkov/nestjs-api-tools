import {ClassSerializerInterceptor, UseInterceptors} from '@nestjs/common';

/**
 * Decorator to serialize response objects with class-transformer.
 */
export const Serialization = (): MethodDecorator & ClassDecorator => UseInterceptors(ClassSerializerInterceptor);
