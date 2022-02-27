import {PAGE_PARAM, POSTGRES_MAX_INT} from '../constants';

import {ExecutionContextHost} from '@nestjs/core/helpers/execution-context-host';
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
    const page = parseInt(request.query[options.pageParam]) || options.defaultPage;
    return page > POSTGRES_MAX_INT ? POSTGRES_MAX_INT : page;
  },
);
