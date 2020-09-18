import { BadRequestException } from '@nestjs/common';
import { ExternalMessageable } from './external-messageable';
export declare abstract class ApiBadRequestError extends BadRequestException implements ExternalMessageable {
    getExternalLogMessage(): any | null;
}
