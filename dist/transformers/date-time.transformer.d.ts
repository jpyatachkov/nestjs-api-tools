import { DateTime } from 'luxon';
import { ValueTransformer } from 'typeorm';
export declare class DateTimeTransformer implements ValueTransformer {
    from(value: DateTime | Date | string | number): any;
    to(value: DateTime | Date | string): any;
}
