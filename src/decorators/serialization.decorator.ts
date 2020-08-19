import {ClassSerializerInterceptor, UseInterceptors} from '@nestjs/common';

/**
 * Decorator to serialize response objects with class-serializer.
 */
export const Serialization = (): MethodDecorator & ClassDecorator => UseInterceptors(ClassSerializerInterceptor);
