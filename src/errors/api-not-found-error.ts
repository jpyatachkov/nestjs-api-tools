import {ExternalMessageable} from './external-messageable';
import {NotFoundException} from '@nestjs/common';

export class ApiNotFoundError extends NotFoundException implements ExternalMessageable {

  getExternalLogMessage(): any | null {
    return null;
  }
}
