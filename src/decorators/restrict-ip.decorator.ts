import {UseGuards, applyDecorators} from '@nestjs/common';

import {ApplyDecoratorsType} from '../types';
import {IpAllowlistGuard} from '../guards';

/**
 * Uses IpAllowlistGuard to enable requests only from allowed IPs.
 */
export const RestrictIp = (): ApplyDecoratorsType => applyDecorators(
  UseGuards(IpAllowlistGuard),
);
