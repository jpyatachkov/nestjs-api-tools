import {UseGuards, applyDecorators} from '@nestjs/common';

import {ApplyDecoratorsType} from 'src';
import {IpAllowlistGuard} from 'src/guards';

/**
 * Uses IpAllowlistGuard to enable requests only from allowed IPs.
 */
export const RestrictIp = (): ApplyDecoratorsType => applyDecorators(
  UseGuards(IpAllowlistGuard),
);
