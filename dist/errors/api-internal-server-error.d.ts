import { ExternalMessageable } from './external-messageable';
import { InternalServerErrorException } from '@nestjs/common';
export declare class ApiInternalServerError extends InternalServerErrorException implements ExternalMessageable {
    getExternalLogMessage(): any | null;
}
