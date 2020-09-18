import {ExternalMessageable} from './external-messageable';
import {UnprocessableEntityException} from '@nestjs/common';

/**
 * HTTP 422 status code.
 */
export abstract class ApiUnprocessableEntityError extends UnprocessableEntityException implements ExternalMessageable {

  public getExternalLogMessage(): any | null {
    return null;
  }
}
