import {ApiQuery} from '@nestjs/swagger';
import {OFFSET_PARAM} from '../../constants';

/**
 * Offset query parameter decorator for Swagger autogenerated documentation.
 */
export const OffsetApiQuery = (): MethodDecorator => ApiQuery({name: OFFSET_PARAM, type: Number, required: false});
