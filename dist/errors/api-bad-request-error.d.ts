import { ApiError } from '@/errors/api-error';
export declare abstract class ApiBadRequestError extends ApiError {
    protected constructor(error: string, message: string, shouldLogToExternal?: boolean);
}
