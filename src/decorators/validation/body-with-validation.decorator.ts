import {Body, ValidationPipe} from '@nestjs/common';

/**
 * Uses built-in NestJS ValidationPipe to validate request body.
 */
export const BodyWithValidation = (): ParameterDecorator => Body(new ValidationPipe({whitelist: true}));
