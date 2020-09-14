import {ApiError} from '@/errors/api-error';
import {HttpStatus} from '@nestjs/common';

/**
 * HTTP 400 status code.
 */
export abstract class ApiBadRequestError extends ApiError {

  protected constructor(
    error: string,
    message: string,
  ) {
    super(
      error,
      message,
      HttpStatus.BAD_REQUEST,
    );
  }
}
