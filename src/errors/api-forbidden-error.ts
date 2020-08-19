import {ApiError} from '@/errors/api-error';
import {HttpStatus} from '@nestjs/common';

export abstract class ApiForbiddenError extends ApiError {

  protected constructor(
    error: string,
    message: string,
    shouldLogToExternal = true,
  ) {
    super(
      HttpStatus.FORBIDDEN,
      error,
      message,
      shouldLogToExternal,
    );
  }
}
