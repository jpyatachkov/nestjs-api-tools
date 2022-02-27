import { PipeTransform } from '@nestjs/common';
export declare class MaxValuePipe implements PipeTransform {
    private readonly maxValue;
    constructor(maxValue?: number);
    transform(value: any): any;
}
