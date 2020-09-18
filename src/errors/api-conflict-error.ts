import {ConflictException} from '@nestjs/common';
import {ExternalMessageable} from './external-messageable';

/**
 * HTTP 409 status code.
 */
export abstract class ApiConflictError extends ConflictException implements ExternalMessageable {

  public getExternalLogMessage(): string | any | null {
    return null;
  }
}
