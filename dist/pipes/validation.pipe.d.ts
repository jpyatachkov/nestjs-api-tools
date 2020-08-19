import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { I18nRequestScopeService } from 'nestjs-i18n';
export interface ValidationPipeOptions {
    depth: number;
}
export declare class ValidationPipe implements PipeTransform {
    private readonly i18n;
    private readonly options;
    static readonly DEFAULT_DEPTH = 10;
    private readonly logger;
    private static toValidate;
    constructor(i18n: I18nRequestScopeService, options: ValidationPipeOptions);
    transform(value: any, { metatype }: ArgumentMetadata): Promise<any>;
    private processErrors;
    private stringifyError;
    private generateErrorMessages;
}
