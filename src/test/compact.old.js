import compact from '../compact';

describe('compact', () => {
  test('removes falsey values from an array', () => {
    const input = [0, 1, false, 2, '', 3, null, undefined, NaN];
    const expectedOutput = [1, 2, 3];
    expect(compact(input)).toEqual(expectedOutput);
  });

  test('returns an empty array when input is an empty array', () => {
    const input = [];
    const expectedOutput = [];
    expect(compact(input)).toEqual(expectedOutput);
  });

  test('does not modify an array with no falsey values', () => {
    const input = [1, 'a', true, {}, []];
    const expectedOutput = [1, 'a', true, {}, []];
    expect(compact(input)).toEqual(expectedOutput);
  });

  test('removes all falsey values from an array with only falsey values', () => {
    const input = [false, null, 0, '', undefined, NaN];
    const expectedOutput = [];
    expect(compact(input)).toEqual(expectedOutput);
  });

  test('handles arrays with mixed data types correctly', () => {
    const input = [0, 'hello', NaN, 42, '', true, null];
    const expectedOutput = ['hello', 42, true];
    expect(compact(input)).toEqual(expectedOutput);
  });

  test('does not modify the input array (ensures immutability)', () => {
    const input = [0, 1, false, 2, '', 3];
    const inputCopy = [...input];
    compact(input);
    expect(input).toEqual(inputCopy);
  });
});
