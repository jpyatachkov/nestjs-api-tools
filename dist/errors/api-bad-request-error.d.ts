import { BadRequestException } from '@nestjs/common';
import { ExternalMessageable } from './external-messageable';
export declare abstract class ApiBadRequestError extends BadRequestException implements ExternalMessageable {
    getExternalLogMessage(): string | any | null;
}
