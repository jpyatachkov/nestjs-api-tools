import { ApiError } from './api-error';
export declare abstract class ApiUnprocessableEntityError extends ApiError {
    protected constructor(error: string, message: string);
}
