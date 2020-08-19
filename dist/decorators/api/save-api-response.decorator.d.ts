import { HttpStatus } from '@nestjs/common';
export interface SaveApiResponseOptions {
    type?: any;
    isArray?: boolean;
    description?: string;
    errorDescription?: string;
    status?: HttpStatus;
}
export declare const SaveApiResponse: (options: SaveApiResponseOptions) => MethodDecorator & ClassDecorator;
