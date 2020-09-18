import {ExternalMessageable} from './external-messageable';
import {UnauthorizedException} from '@nestjs/common';

/**
 * HTTP 401 status code.
 */
export abstract class ApiUnauthorizedError extends UnauthorizedException implements ExternalMessageable {

  public getExternalLogMessage(): string | any | null {
    return null;
  }
}
