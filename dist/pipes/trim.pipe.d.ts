import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class TrimPipe implements PipeTransform {
    static readonly MAX_DEPTH = 10;
    transform(value: unknown, metadata: ArgumentMetadata): any;
    private trim;
}
