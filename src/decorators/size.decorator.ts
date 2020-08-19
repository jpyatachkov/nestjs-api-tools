import {ExecutionContextHost} from '@nestjs/core/helpers/execution-context-host';
import {SIZE_PARAM} from '@/constants';
import {createParamDecorator} from '@nestjs/common';

export interface SizeOptions {
  defaultSize: number;
  maxSize: number;
  sizeParam: string;
}

/**
 * Size decorator.
 */
export const Size = createParamDecorator(
  (options: SizeOptions = {
    defaultSize: 100,
    maxSize: 500,
    sizeParam: SIZE_PARAM,
  }, ctx: ExecutionContextHost): number => {
    const request = ctx.switchToHttp().getRequest();
    const size = parseInt(request.query[options.sizeParam]) || options.defaultSize;
    return (size > options.maxSize) ? options.maxSize : size;
  },
);
