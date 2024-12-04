const camelCase = require('./camelCase.js');


describe('camelCase', () => {
    test('converts "Foo Bar" to "fooBar"', () => {
      expect(camelCase('Foo Bar')).toBe('fooBar');
    });
  
    test('converts "--foo-bar--" to "fooBar"', () => {
      expect(camelCase('--foo-bar--')).toBe('fooBar');
    });
  
    test('converts "__FOO_BAR__" to "fooBar"', () => {
      expect(camelCase('__FOO_BAR__')).toBe('fooBar');
    });
  
    test('handles empty string input', () => {
      expect(camelCase('')).toBe('');
    });
  
    test('handles single word input', () => {
      expect(camelCase('hello')).toBe('hello');
    });
  
    test('handles multiple spaces between words', () => {
      expect(camelCase('hello     world')).toBe('helloWorld');
    });
  
    test('removes special characters and converts to camel case', () => {
      expect(camelCase('foo$#@bar')).toBe('fooBar');
    });
  
    test('handles numeric strings', () => {
      expect(camelCase('foo2bar')).toBe('foo2bar');
    });
  
    test('converts non-string input to string and then to camel case', () => {
      expect(camelCase(123)).toBe('123');
    });
  
    test('handles strings with apostrophes', () => {
      expect(camelCase("I'm a string")).toBe('imAString');
    });
  
    test('handles strings with unicode characters', () => {
      expect(camelCase('héllo wørld')).toBe('hélloWørld');
    });
  });