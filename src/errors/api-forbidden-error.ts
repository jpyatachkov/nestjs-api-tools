import {ApiError} from '@/errors/api-error';
import {HttpStatus} from '@nestjs/common';

/**
 * HTTP 403 status code.
 */
export abstract class ApiForbiddenError extends ApiError {

  protected constructor(
    error: string,
    message: string,
  ) {
    super(
      error,
      message,
      HttpStatus.FORBIDDEN,
    );
  }
}
