import map from '../map';

describe('map', () => {
  it('should apply the iteratee function to each element of the array', () => {
    const array = [1, 2, 3];
    const iteratee = (value) => value * 2;
    
    expect(map(array, iteratee)).toEqual([2, 4, 6]);
  });

  it('should handle an empty array', () => {
    const array = [];
    const iteratee = (value) => value * 2;
    
    expect(map(array, iteratee)).toEqual([]);
  });

  it('should handle arrays with different data types', () => {
    const array = ['1', 2, true];
    const iteratee = (value) => typeof value;

    expect(map(array, iteratee)).toEqual(['string', 'number', 'boolean']);
  });

  it('should work with negative numbers in the array', () => {
    const array = [-1, -2, -3];
    const iteratee = (value) => Math.abs(value);

    expect(map(array, iteratee)).toEqual([1, 2, 3]);
  });

  it('should return a new array (no mutation)', () => {
    const array = [1, 2, 3];
    const iteratee = (value) => value * 2;

    const result = map(array, iteratee);

    expect(result).not.toBe(array); // Ensure a new array is returned
    expect(result).toEqual([2, 4, 6]); // Check the contents
  });

  it('should handle non-array inputs gracefully', () => {
    expect(map(null, (x) => x)).toEqual([]);
    expect(map(undefined, (x) => x)).toEqual([]);
    expect(map({}, (x) => x)).toEqual([]);
  });
});
