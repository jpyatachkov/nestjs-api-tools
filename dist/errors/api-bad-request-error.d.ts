import { ApiError } from './api-error';
export declare abstract class ApiBadRequestError extends ApiError {
    protected constructor(error: string, message: string);
}
