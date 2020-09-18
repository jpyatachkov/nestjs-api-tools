import {BadRequestException} from '@nestjs/common';
import {ExternalMessageable} from './external-messageable';

/**
 * HTTP 400 status code.
 */
export abstract class ApiBadRequestError extends BadRequestException implements ExternalMessageable {

  public getExternalLogMessage(): string | any | null {
    return null;
  }
}
