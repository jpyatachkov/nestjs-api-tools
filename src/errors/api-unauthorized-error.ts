import {ApiError} from '@/errors/api-error';
import {HttpStatus} from '@nestjs/common';

export abstract class ApiUnauthorizedError extends ApiError {

  protected constructor(
    error: string,
    message: string,
    shouldLogToExternal = true,
  ) {
    super(
      HttpStatus.UNAUTHORIZED,
      error,
      message,
      shouldLogToExternal,
    );
  }
}
