import {CanActivate, ExecutionContext, Inject, Injectable, Logger} from '@nestjs/common';
import {IP_ALLOWLIST, IP_ALLOWLIST_GUARD_OPTIONS} from '../constants';

import {Reflector} from '@nestjs/core';
import {Request} from 'express';
import ipRangeCheck from 'ip-range-check';

export interface IpAllowlistGuardOptions {
  debug?: boolean;
  allowedIps: string[];
}

@Injectable()
export class IpAllowlistGuard implements CanActivate {

  private readonly logger: Logger = new Logger(IpAllowlistGuard.name);

  public constructor(
    @Inject(IP_ALLOWLIST_GUARD_OPTIONS)
    private readonly options: IpAllowlistGuardOptions,
    private readonly reflector: Reflector,
  ) {
  }

  public canActivate(context: ExecutionContext): boolean {
    if (this.options.debug) {
      return true;
    }

    const req: Request = context.switchToHttp().getRequest();
    const ip = req.ip;

    this.logger.error(`IP ${ip} TRIES TO ACCESS ${req.path}`);

    const allowedIps = this.getAllowedIps(context);

    if (allowedIps?.length && ipRangeCheck(ip, allowedIps)) {
      this.logger.error(`IP ${ip} ACCESS TO ${req.path} ALLOWED`);
      return true;
    } else {
      this.logger.error(`IP ${ip} ACCESS TO ${req.path} DENIED`);
    }

    return false;
  }

  private getAllowedIps(context: ExecutionContext): string[] {
    const allowedIpsFromMeta = [
      ...(this.reflector.get(IP_ALLOWLIST, context.getClass()) ?? []),
      ...(this.reflector.get(IP_ALLOWLIST, context.getHandler()) ?? []),
    ];
    return allowedIpsFromMeta.length ? allowedIpsFromMeta : this.options.allowedIps;
  }
}
