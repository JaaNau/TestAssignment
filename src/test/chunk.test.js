import chunk from '../chunk';

describe('chunk', () => {
  test('should split array into chunks of specified size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test('should handle size larger than array length', () => {
    expect(chunk(['a', 'b'], 5)).toEqual([['a', 'b']]);
  });

  test('should handle size equal to array length', () => {
    expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
  });

  test('should handle size of 1 (each element in its own chunk)', () => {
    expect(chunk([1, 2, 3])).toEqual([[1], [2], [3]]);
  });

  test('should use default size of 1 when size is not provided', () => {
    expect(chunk(['a', 'b', 'c'])).toEqual([['a'], ['b'], ['c']]);
  });

  test('should handle size of 0 or negative size by returning empty array', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
    expect(chunk([1, 2, 3], -1)).toEqual([]);
  });

  test('should handle empty array input', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('should handle null and undefined array inputs', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
  });

  test('should not mutate the original array', () => {
    const array = [1, 2, 3, 4];
    chunk(array, 2);
    expect(array).toEqual([1, 2, 3, 4]);
  });
});
