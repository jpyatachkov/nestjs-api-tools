import {OFFSET_PARAM, POSTGRES_MAX_INT} from './../constants';

import {ExecutionContextHost} from '@nestjs/core/helpers/execution-context-host';
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
    const offset = parseInt(request.query[options.offsetParam]) || options.defaultOffset;
    return offset > POSTGRES_MAX_INT ? POSTGRES_MAX_INT : offset;
  },
);
