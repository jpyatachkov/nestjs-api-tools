import { DateTime } from 'luxon';
import { TransformDecoratorType } from '../../types';
export declare const transformAsDate: (v: DateTime) => string | null;
export declare const AsDate: () => TransformDecoratorType;
