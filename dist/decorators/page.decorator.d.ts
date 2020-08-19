export interface PageOptions {
    defaultPage: number;
    pageParam: string;
}
export declare const Page: (...dataOrPipes: (import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | PageOptions)[]) => ParameterDecorator;
