import {CustomDecorator, SetMetadata} from '@nestjs/common';

import {IP_ALLOWLIST} from '../constants';

/**
 * Decorator to override default ip address allowlist.
 * @param ips
 */
export const IpAllowlist = (...ips: string[]): CustomDecorator => SetMetadata(IP_ALLOWLIST, ips);
