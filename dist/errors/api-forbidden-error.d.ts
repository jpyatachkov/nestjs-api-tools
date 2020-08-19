import { ApiError } from '@/errors/api-error';
export declare abstract class ApiForbiddenError extends ApiError {
    protected constructor(error: string, message: string, shouldLogToExternal?: boolean);
}
