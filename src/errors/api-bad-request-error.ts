import {ApiError} from '@/errors/api-error';
import {HttpStatus} from '@nestjs/common';

export abstract class ApiBadRequestError extends ApiError {

  protected constructor(
    error: string,
    message: string,
    shouldLogToExternal = true,
  ) {
    super(
      HttpStatus.BAD_REQUEST,
      error,
      message,
      shouldLogToExternal,
    );
  }
}
