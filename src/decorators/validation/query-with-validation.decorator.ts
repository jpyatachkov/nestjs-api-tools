import {Query, ValidationPipe} from '@nestjs/common';

/**
 * Uses built-in NestJS ValidationPipe to validate request query.
 */
export const QueryWithValidation = (): ParameterDecorator => Query(new ValidationPipe({whitelist: true}));
