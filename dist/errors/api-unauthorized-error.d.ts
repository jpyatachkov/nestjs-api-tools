import { ExternalMessageable } from './external-messageable';
import { UnauthorizedException } from '@nestjs/common';
export declare abstract class ApiUnauthorizedError extends UnauthorizedException implements ExternalMessageable {
    getExternalLogMessage(): any | null;
}
