export interface LimitOptions {
    defaultLimit: number;
    limitParam: string;
    maxLimit: number;
}
export declare const Limit: (...dataOrPipes: (LimitOptions | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
