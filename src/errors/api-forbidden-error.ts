import {ExternalMessageable} from './external-messageable';
import {ForbiddenException} from '@nestjs/common';

/**
 * HTTP 403 status code.
 */
export abstract class ApiForbiddenError extends ForbiddenException implements ExternalMessageable {

  public getExternalLogMessage(): any | null {
    return null;
  }
}
