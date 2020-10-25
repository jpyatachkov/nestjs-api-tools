import {ExternalMessageable} from './external-messageable';
import {NotFoundException} from '@nestjs/common';

export class ApiNotFoundError extends NotFoundException implements ExternalMessageable {

  public getExternalLogMessage(): any | null {
    return null;
  }
}
