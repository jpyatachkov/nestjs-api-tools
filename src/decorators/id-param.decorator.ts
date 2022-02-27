import {Param, ParseIntPipe} from '@nestjs/common';

import {MaxValuePipe} from './../pipes';

/**
 * Чтобы брать id из query.
 * @param queryParamName
 */
export const IdParam = (queryParamName = 'id'): ParameterDecorator => Param(queryParamName, ParseIntPipe, MaxValuePipe);
