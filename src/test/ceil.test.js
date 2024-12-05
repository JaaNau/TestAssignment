import ceil from '../ceil';


describe('ceil', () => {
    test('should round up to the nearest integer when no precision is specified', () => {
      expect(ceil(4.006)).toBe(5);
      expect(ceil(4.0)).toBe(4);
      expect(ceil(-4.006)).toBe(-4);
      expect(ceil(-4.0)).toBe(-4);
    });
  
    test('should round up to specified positive precision', () => {
      expect(ceil(6.004, 2)).toBe(6.01);
      expect(ceil(6.000, 2)).toBe(6.0);
      expect(ceil(-6.004, 2)).toBe(-6.0);
      expect(ceil(-6.000, 2)).toBe(-6.0);
    });
  
    test('should round up to specified negative precision', () => {
      expect(ceil(6040, -2)).toBe(6100);
      expect(ceil(6000, -2)).toBe(6000);
      expect(ceil(-6040, -2)).toBe(-6000);
      expect(ceil(-6000, -2)).toBe(-6000);
    });
  
    test('should handle zero correctly', () => {
      expect(ceil(0)).toBe(0);
      expect(ceil(0, 2)).toBe(0);
      expect(ceil(0, -2)).toBe(0);
    });
  
    test('should handle numbers that are already at the desired precision', () => {
      expect(ceil(5.0)).toBe(5);
      expect(ceil(5.0, 2)).toBe(5.0);
      expect(ceil(5000, -2)).toBe(5000);
    });
  
    test('should handle very small numbers', () => {
      expect(ceil(0.0004, 4)).toBe(0.0004);
      expect(ceil(0.00044, 4)).toBe(0.0005);
    });
  
    test('should handle very large numbers', () => {
      expect(ceil(123456789.123456, 2)).toBe(123456789.13);
    });
  
    test('should handle non-integer precisions by returning NaN', () => {
      expect(ceil(5.123456, 2.8)).toBeNaN();
    });
  
    test('should return NaN for invalid number inputs', () => {
      expect(ceil(NaN)).toBeNaN();
      expect(ceil('abc')).toBeNaN();
      expect(ceil(undefined)).toBeNaN();
    });
  
    test('should default precision to 0 when precision is undefined', () => {
      expect(ceil(4.006, undefined)).toBe(5);
    });
  
    test('should handle null and boolean as precision inputs', () => {
      expect(ceil(4.006, null)).toBe(5);
      expect(ceil(4.006, true)).toBe(4.1);
      expect(ceil(4.006, false)).toBe(5);
    });
  
    test('should handle string number inputs', () => {
      expect(ceil('4.006')).toBe(5);
      expect(ceil('6.004', 2)).toBe(6.01);
    });
  
    test('should handle string precision inputs', () => {
      expect(ceil(4.006, '2')).toBe(4.01);
      expect(ceil(6040, '-2')).toBe(6100);
    });
  
    test('should handle precision greater than number of decimal places', () => {
      expect(ceil(1.23, 5)).toBe(1.23);
      expect(ceil(-1.23, 5)).toBe(-1.23);
    });
  
    test('should handle precision as zero', () => {
      expect(ceil(4.006, 0)).toBe(5);
      expect(ceil(-4.006, 0)).toBe(-4);
    });
});