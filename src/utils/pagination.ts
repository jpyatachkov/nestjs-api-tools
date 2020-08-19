/**
 * Transforms page (from 1) and size to offset (from 0) and limit.
 * @param {number} page Page number (from 1).
 * @param {number} size Page size.
 * @param {number} defaultSize Default page size - used if no page size provided.
 */
export const pageAndSizeToSkipAndTake = (page: number, size: number, defaultSize: number): number[] => {
  const take = size === null ? null : size > 0 ? size : defaultSize;
  const skip = page <= 1 ? 0 : (page - 1) * size;
  return [skip, take];
};
