import { ExternalMessageable } from './external-messageable';
import { ForbiddenException } from '@nestjs/common';
export declare abstract class ApiForbiddenError extends ForbiddenException implements ExternalMessageable {
    getExternalLogMessage(): string | any | null;
}
