export interface OffsetOptions {
    defaultOffset: number;
    offsetParam: string;
}
export declare const Offset: (...dataOrPipes: (import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | OffsetOptions)[]) => ParameterDecorator;
