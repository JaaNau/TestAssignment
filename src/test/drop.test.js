import drop from '../drop';

describe('drop', () => {
  it('should drop 1 element by default', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });

  it('should drop the specified number of elements', () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
    expect(drop([1, 2, 3], 1)).toEqual([2, 3]);
  });

  it('should return an empty array if n is greater than or equal to the array length', () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
    expect(drop([1, 2, 3], 3)).toEqual([]);
  });

  it('should return the original array if n is 0', () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(drop([], 1)).toEqual([]);
  });

  it('should handle negative values for n', () => {
    expect(drop([1, 2, 3], -1)).toEqual([1, 2, 3]);
  });
});
