import {ApiError} from '@/interfaces';
import {ApiNotFoundResponse} from '@nestjs/swagger';

/**
 * 404 response decorator for Swagger autogenerated documentation.
 */
export const NotFoundApiResponse = (description = 'Запрашиваемый ресурс не найден'): MethodDecorator & ClassDecorator => ApiNotFoundResponse({
  description,
  type: ApiError,
});
