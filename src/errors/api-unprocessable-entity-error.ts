import {ApiError} from '@/errors/api-error';
import {HttpStatus} from '@nestjs/common';

export abstract class ApiUnprocessableEntityError extends ApiError {

  protected constructor(
    error: string,
    message: string,
    shouldLogToExternal = true,
  ) {
    super(
      HttpStatus.UNPROCESSABLE_ENTITY,
      error,
      message,
      shouldLogToExternal,
    );
  }
}
