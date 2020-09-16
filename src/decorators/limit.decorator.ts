import {ExecutionContextHost} from '@nestjs/core/helpers/execution-context-host';
import {LIMIT_PARAM} from '../constants';
import {createParamDecorator} from '@nestjs/common';

export interface LimitOptions {
  defaultLimit: number;
  limitParam: string;
  maxLimit: number;
}

/**
 * Limit decorator.
 */
export const Limit = createParamDecorator(
  (options: LimitOptions = {
    defaultLimit: 25,
    limitParam: LIMIT_PARAM,
    maxLimit: 500,
  }, ctx: ExecutionContextHost): number => {
    const request = ctx.switchToHttp().getRequest();
    const limit = parseInt(request.query[options.limitParam]) || options.defaultLimit;
    return (limit > options.maxLimit) ? options.maxLimit : limit;
  },
);
