// countBy.test.js
import countBy from './countBy';

describe('countBy', () => {
  it('should count the occurrences based on the iteratee', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    const result = countBy(users, value => value.active);
    
    expect(result).toEqual({ 'true': 2, 'false': 1 });
  });

  it('should return an empty object for an empty collection', () => {
    const result = countBy([], value => value.active);
    
    expect(result).toEqual({});
  });

  it('should count occurrences based on a numeric iteratee', () => {
    const numbers = [1, 2, 2, 3, 3, 3];
    const result = countBy(numbers, value => value);
    
    expect(result).toEqual({ '1': 1, '2': 2, '3': 3 });
  });

  it('should handle objects and use the property as a key', () => {
    const data = [
      { 'user': 'barney', 'age': 36 },
      { 'user': 'betty', 'age': 36 },
      { 'user': 'fred', 'age': 40 }
    ];
    const result = countBy(data, value => value.age);
    
    expect(result).toEqual({ '36': 2, '40': 1 });
  });

  it('should return an object with default 0 value if key does not exist', () => {
    const result = countBy([1, 2, 2, 3, 3, 3], value => value > 2 ? 'greaterThanTwo' : 'lessThanTwo');
    
    expect(result).toEqual({
      'lessThanTwo': 2,
      'greaterThanTwo': 4
    });
  });
});
