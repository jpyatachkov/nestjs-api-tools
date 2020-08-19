import {ApiBadRequestResponse} from '@nestjs/swagger';
import {ApiError} from '@/interfaces';

/**
 * 400 response decorator for Swagger autogenerated documentation.
 */
export const BadRequestApiResponse = (description = 'Некорректное тело запроса'): MethodDecorator & ClassDecorator => ApiBadRequestResponse({
  description,
  type: ApiError,
});
