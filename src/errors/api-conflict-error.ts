import {ApiError} from '@/errors/api-error';
import {HttpStatus} from '@nestjs/common';

export abstract class ApiConflictError extends ApiError {

  protected constructor(
    error: string,
    message: string,
    shouldLogToExternal = true,
  ) {
    super(
      HttpStatus.CONFLICT,
      error,
      message,
      shouldLogToExternal,
    );
  }
}
