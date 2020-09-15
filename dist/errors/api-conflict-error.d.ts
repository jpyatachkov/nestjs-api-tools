import { ApiError } from './api-error';
export declare abstract class ApiConflictError extends ApiError {
    protected constructor(error: string, message: string);
}
