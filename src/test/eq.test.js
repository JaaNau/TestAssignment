import eq from './eq';

describe('eq', () => {
  it('should return true for identical objects (same reference)', () => {
    const object = { 'a': 1 };
    expect(eq(object, object)).toBe(true);
  });

  it('should return false for objects with the same values but different references', () => {
    const object = { 'a': 1 };
    const other = { 'a': 1 };
    expect(eq(object, other)).toBe(false);
  });

  it('should return true for identical primitive values', () => {
    expect(eq('a', 'a')).toBe(true);
    expect(eq(1, 1)).toBe(true);
    expect(eq(NaN, NaN)).toBe(true); // special case for NaN
  });

  it('should return false for different primitive values', () => {
    expect(eq('a', 'b')).toBe(false);
    expect(eq(1, 2)).toBe(false);
  });

  it('should return false for different types of values', () => {
    expect(eq('a', 1)).toBe(false);
    expect(eq(true, 1)).toBe(false);
  });

  it('should return false for objects and primitive values', () => {
    const object = { 'a': 1 };
    expect(eq(object, 1)).toBe(false);
    expect(eq(object, 'a')).toBe(false);
  });

  it('should handle NaN correctly', () => {
    expect(eq(NaN, NaN)).toBe(true); // special case: NaN is equal to NaN
    expect(eq(NaN, 1)).toBe(false);
  });

  it('should return false for different types of objects', () => {
    const object = { 'a': 1 };
    const other = [1, 2, 3];
    expect(eq(object, other)).toBe(false);
  });
});
