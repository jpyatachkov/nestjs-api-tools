/**
 * Creates replacer function for JSON.stringify.
 * @param fieldNamesToExclude
 */
export function createJsonReplacer(fieldNamesToExclude: string[]): (key: string, val: string | any) => any | undefined {
  return (key: string, val: string | any) => fieldNamesToExclude.includes(key) ? undefined : val;
}

/**
 * Removes properties from object.
 * @param {Record<string, any>} obj Object to remove properties from.
 * @param {string} keysToExclude Properties to exclude.
 */
export function replacer(obj: Record<string, any>, keysToExclude: string[]): Record<string, any> {
  Object.keys(obj).forEach((k) => {
    if (keysToExclude.includes(k)) {
      delete obj[k];
    }
  });
  return obj;
}
