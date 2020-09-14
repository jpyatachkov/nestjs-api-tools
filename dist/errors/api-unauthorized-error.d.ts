import { ApiError } from '@/errors/api-error';
export declare abstract class ApiUnauthorizedError extends ApiError {
    protected constructor(error: string, message: string);
}
