import {ApiErrorResponse} from '../../interfaces';
import {ApiUnauthorizedResponse} from '@nestjs/swagger';

/**
 * 401 response decorator for Swagger autogenerated documentation.
 */
export const UnauthorizedApiResponse = (description = 'Пользователь не авторизован'): MethodDecorator & ClassDecorator => ApiUnauthorizedResponse({
  description,
  type: ApiErrorResponse,
});
