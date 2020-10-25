import {ExternalMessageable} from './external-messageable';
import {InternalServerErrorException} from '@nestjs/common';

export class ApiInternalServerError extends InternalServerErrorException implements ExternalMessageable {

  public getExternalLogMessage(): any | null {
    return null;
  }
}
