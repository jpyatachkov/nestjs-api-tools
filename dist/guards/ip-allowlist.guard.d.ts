import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export interface IpAllowlistGuardOptions {
    debug?: boolean;
    allowedIps: string[];
}
export declare class IpAllowlistGuard implements CanActivate {
    private readonly options;
    private readonly reflector;
    private readonly logger;
    constructor(options: IpAllowlistGuardOptions, reflector: Reflector);
    canActivate(context: ExecutionContext): boolean;
    private getAllowedIps;
}
