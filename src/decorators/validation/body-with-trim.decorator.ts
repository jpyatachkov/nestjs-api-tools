import {UsePipes, applyDecorators} from '@nestjs/common';

import {ApplyDecoratorsType} from '../../types';
import {TrimPipe} from '../../pipes';

/**
 * Uses built-in Trim pipe to trim request body spaces.
 * IT MUST BE USED FOR CONTROLLER METHOD, NOT REQUEST BODY ARGUMENT!
 */
export const BodyWithTrim = (): ApplyDecoratorsType => applyDecorators(
  UsePipes(new TrimPipe()),
);
