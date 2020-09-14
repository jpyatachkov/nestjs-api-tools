import {HttpStatus} from '@nestjs/common';

export abstract class ApiError extends Error {

  protected constructor(
    public readonly error: string,
    public readonly message: string,
    public readonly statusCode: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
  ) {
    super();
  }

  /**
   * Message to log to Discord.
   * If null returned, nothing needs to be logged.
   */
  public getExternalLogMessage(): string | null {
    return null;
  }
}
