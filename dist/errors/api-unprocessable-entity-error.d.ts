import { ExternalMessageable } from './external-messageable';
import { UnprocessableEntityException } from '@nestjs/common';
export declare abstract class ApiUnprocessableEntityError extends UnprocessableEntityException implements ExternalMessageable {
    getExternalLogMessage(): string | any | null;
}
