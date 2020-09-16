import {ExecutionContextHost} from '@nestjs/core/helpers/execution-context-host';
import {PAGE_PARAM} from '../constants';
import {createParamDecorator} from '@nestjs/common';

export interface PageOptions {
  defaultPage: number;
  pageParam: string;
}

/**
 * Page decorator.
 */
export const Page = createParamDecorator(
  (options: PageOptions = {defaultPage: 1, pageParam: PAGE_PARAM}, ctx: ExecutionContextHost): number => {
    const request = ctx.switchToHttp().getRequest();
    return parseInt(request.query[options.pageParam]) || options.defaultPage;
  },
);
