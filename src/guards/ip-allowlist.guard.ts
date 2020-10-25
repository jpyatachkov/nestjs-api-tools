import {CanActivate, ExecutionContext, Inject, Injectable, Logger} from '@nestjs/common';

import {IP_ALLOWLIST_GUARD_OPTIONS} from '../constants';
import {Request} from 'express';

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
  ) {
  }

  public canActivate(context: ExecutionContext): boolean {
    if (this.options.debug) {
      return true;
    }

    const req: Request = context.switchToHttp().getRequest();
    const ip = req.ip;

    this.logger.error(`IP ${ip} TRIES TO ACCESS ${req.path}`);

    if (!this.options.allowedIps.includes(ip)) {
      this.logger.error(`IP ${ip} ACCESS TO ${req.path} DENIED`);
      return false;
    } else {
      this.logger.error(`IP ${ip} ACCESS TO ${req.path} ALLOWED`);
    }

    return true;
  }
}
