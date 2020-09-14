import { HttpStatus } from '@nestjs/common';
export declare abstract class ApiError extends Error {
    readonly error: string;
    readonly message: string;
    readonly statusCode: HttpStatus;
    protected constructor(error: string, message: string, statusCode?: HttpStatus);
    getExternalLogMessage(): string | null;
}
