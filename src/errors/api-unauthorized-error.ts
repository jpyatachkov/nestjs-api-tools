import {ApiError} from '@/errors/api-error';
import {HttpStatus} from '@nestjs/common';

/**
 * HTTP 401 status code.
 */
export abstract class ApiUnauthorizedError extends ApiError {

  protected constructor(
    error: string,
    message: string,
  ) {
    super(
      error,
      message,
      HttpStatus.UNAUTHORIZED,
    );
  }
}
