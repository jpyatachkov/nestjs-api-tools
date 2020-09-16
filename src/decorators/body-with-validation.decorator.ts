import {Body} from '@nestjs/common';
import {ValidationPipe} from '../pipes';

/**
 * Explicit validation usage with whitelisting. Name illustrates the contradiction between
 * built-in decorator @Body which still can be used when it's not really important to ensure
 * all DTO restrictions to be satisfied and properties - whitelisted.
 * @constructor
 */
export const BodyWithValidation = () => Body(ValidationPipe);
