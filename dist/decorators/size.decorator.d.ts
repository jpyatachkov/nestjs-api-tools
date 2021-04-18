export interface SizeOptions {
    defaultSize: number;
    maxSize: number;
    sizeParam: string;
}
export declare const Size: (...dataOrPipes: (import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | SizeOptions)[]) => ParameterDecorator;
