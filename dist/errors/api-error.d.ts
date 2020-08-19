import { HttpStatus } from '@nestjs/common';
export declare abstract class ApiError extends Error {
    readonly statusCode: HttpStatus;
    readonly error: string;
    readonly message: string;
    readonly shouldLogToExternal: boolean;
    protected constructor(statusCode: HttpStatus, error: string, message: string, shouldLogToExternal?: boolean);
    abstract getExternalLogMessage(): string;
}
