import {HttpStatus} from '@nestjs/common';

export abstract class ApiError extends Error {

  protected constructor(
    public readonly statusCode: HttpStatus,
    public readonly error: string,
    public readonly message: string,
    public readonly shouldLogToExternal: boolean = true,
  ) {
    super();
  }

  public abstract getExternalLogMessage(): string;
}
