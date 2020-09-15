import {ApiError} from './api-error';
import {HttpStatus} from '@nestjs/common';

/**
 * HTTP 409 status code.
 */
export abstract class ApiConflictError extends ApiError {

  protected constructor(
    error: string,
    message: string,
  ) {
    super(
      error,
      message,
      HttpStatus.CONFLICT,
    );
  }
}
