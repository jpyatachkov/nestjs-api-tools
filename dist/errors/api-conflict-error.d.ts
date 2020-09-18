import { ConflictException } from '@nestjs/common';
import { ExternalMessageable } from './external-messageable';
export declare abstract class ApiConflictError extends ConflictException implements ExternalMessageable {
    getExternalLogMessage(): any | null;
}
