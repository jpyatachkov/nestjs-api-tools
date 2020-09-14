import {ApiError} from '@/errors/api-error';
import {HttpStatus} from '@nestjs/common';

/**
 * HTTP 422 status code.
 */
export abstract class ApiUnprocessableEntityError extends ApiError {

  protected constructor(
    error: string,
    message: string,
  ) {
    super(
      error,
      message,
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  }
}
