import {ExecutionContextHost} from '@nestjs/core/helpers/execution-context-host';
import {OFFSET_PARAM} from '@/constants';
import {createParamDecorator} from '@nestjs/common';

export interface OffsetOptions {
  defaultOffset: number;
  offsetParam: string;
}

/**
 * Offset decorator.
 */
export const Offset = createParamDecorator(
  (options: OffsetOptions = {defaultOffset: 0, offsetParam: OFFSET_PARAM}, ctx: ExecutionContextHost): number => {
    const request = ctx.switchToHttp().getRequest();
    return parseInt(request.query[options.offsetParam]) || options.defaultOffset;
  },
);
