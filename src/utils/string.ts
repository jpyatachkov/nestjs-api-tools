/**
 * Makes first letter capital.
 * @param {string} str.
 */
export function capitalize(str: string): string {
  if (!str || !str.length) {
    return '';
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Joins strings with delimiter passed without delimiter duplication.
 * @param {string} delimiter.
 * @param {string[]} values.
 */
export function joinStrings(delimiter: string, ...values: string[]): string {
  return values.map((v) => {
    const startsWith = v.startsWith(delimiter);
    const endsWith = v.endsWith(delimiter);

    let tmp = v;

    if (startsWith) {
      tmp = tmp.substr(delimiter.length);
    }

    if (endsWith) {
      tmp = tmp.substr(0, tmp.length - delimiter.length);
    }

    return tmp;
  })
    .filter(v => !!v.length)
    .join(delimiter);
}

/**
 * Checks whether string is empty.
 * @param {string} str.
 */
export function isEmpty(str: string): boolean {
  return !(str || '').trim();
}
