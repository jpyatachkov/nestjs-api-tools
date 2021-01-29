import { DateTime } from 'luxon';
import { TransformDecoratorType } from '../../types';
export declare const transformAsDate: (v: DateTime | unknown) => string | null;
export declare const AsDate: () => TransformDecoratorType;
