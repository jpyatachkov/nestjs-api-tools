import { DateTime } from 'luxon';
import { TransformDecoratorType } from '../../types';
export declare const transformAsDateTime: (v: DateTime | unknown) => string | null;
export declare const AsDateTime: () => TransformDecoratorType;
