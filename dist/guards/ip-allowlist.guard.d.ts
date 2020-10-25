import { CanActivate, ExecutionContext } from '@nestjs/common';
export interface IpAllowlistGuardOptions {
    debug?: boolean;
    allowedIps: string[];
}
export declare class IpAllowlistGuard implements CanActivate {
    private readonly options;
    private readonly logger;
    constructor(options: IpAllowlistGuardOptions);
    canActivate(context: ExecutionContext): boolean;
}
