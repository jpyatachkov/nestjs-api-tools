import {UsePipes, applyDecorators} from '@nestjs/common';

import {ApplyDecoratorsType} from '../../types';
import {TrimPipe} from '../../pipes';

/**
 * Uses built-in NestJS ValidationPipe to trim request body spaces.
 */
export const BodyWithTrim = (): ApplyDecoratorsType => applyDecorators(
  UsePipes(new TrimPipe()),
);
