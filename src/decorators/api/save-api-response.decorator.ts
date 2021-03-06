import {ApiBadRequestResponse, ApiResponse} from '@nestjs/swagger';
import {HttpCode, HttpStatus, applyDecorators} from '@nestjs/common';

import {ApiErrorResponse} from '../../interfaces';

export interface SaveApiResponseOptions {
  type?: any;
  isArray?: boolean;
  description?: string;
  errorDescription?: string;
  status?: HttpStatus;
}

/**
 * Save operation decorator (for POST requests) for Swagger autogenerated documentation.
 */
export const SaveApiResponse = (options: SaveApiResponseOptions): MethodDecorator & ClassDecorator => applyDecorators(
  HttpCode(options.status || HttpStatus.CREATED),
  ApiResponse({
    status: options.status || HttpStatus.CREATED,
    description: options.description,
    type: options.type,
    isArray: options.isArray,
  }),
  ApiBadRequestResponse({
    description: options.errorDescription || 'Некорректное тело запроса',
    type: ApiErrorResponse,
  }),
);
