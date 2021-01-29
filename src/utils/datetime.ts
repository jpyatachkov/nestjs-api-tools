import {DateTime} from 'luxon';

/**
 * Tries to parse any object as luxon.DateTime
 * @param v
 */
export function parseDateTime(v: string | Date | DateTime | number | null | undefined): DateTime | null {
  if (!v) {
    return null;
  }

  if (v instanceof DateTime) {
    return v;
  }

  if (typeof v === 'string') {
    // To parse PostgreSQL datetime with format "2020-12-03 21:05:51+00".
    const withoutSpaces = v.replace(' ', 'T');

    const fromISO = DateTime.fromISO(withoutSpaces);

    if (fromISO.isValid) {
      return fromISO;
    }
  }

  const fromJS = DateTime.fromJSDate(v as Date);

  if (fromJS.isValid) {
    return fromJS;
  }

  try {
    const fromMillis = DateTime.fromMillis(v as number);

    if (fromMillis.isValid) {
      return fromMillis;
    }

    const fromSecond = DateTime.fromSeconds(v as number);

    if (fromSecond.isValid) {
      return fromSecond;
    }
  } catch (e) {
    return null;
  }

  return null;
}
