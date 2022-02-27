import {Param, ParseUUIDPipe} from '@nestjs/common';

/**
 * Чтобы брать UUID из query.
 * @param queryParamName
 */
export const UuidParam = (queryParamName = 'guid'): ParameterDecorator => Param(queryParamName, ParseUUIDPipe);
