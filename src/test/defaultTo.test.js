import { defaultTo } from './../defaultTo.js'

describe('defaultTo', () => {
  it('should return the value when it is not null, undefined, or NaN', () => {
    expect(defaultTo(5, 10)).toBe(5);
    expect(defaultTo('hello', 'default')).toBe('hello');
  });

  it('should return the default value when the value is null', () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  it('should return the default value when the value is undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });

  it('should return the default value when the value is NaN', () => {
    expect(defaultTo(NaN, 10)).toBe(10);
  });

  it('should return NaN if value is NaN and default is also NaN', () => {
    expect(defaultTo(NaN, NaN)).toBe(NaN);
  });
});
