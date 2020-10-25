import {DateTime} from 'luxon';
import {ValueTransformer} from 'typeorm';
import {parseDateTime} from '../utils';

export class DateTransformer implements ValueTransformer {

  public from(value: DateTime | Date | string | number): any {
    return parseDateTime(value);
  }

  public to(value: DateTime | Date | string): any {
    if (!value || value.toString().match(/^\d{4}-\d{2}-\d{2}$/)) {
      return value as string;
    }

    const format = 'yyyy-MM-dd';

    if (value instanceof DateTime) {
      return value.toFormat(format);
    }

    if (value instanceof Date) {
      return DateTime.fromJSDate(value).toFormat(format);
    }
  }
}
