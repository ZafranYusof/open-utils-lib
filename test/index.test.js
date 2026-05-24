const { capitalize, truncate, clamp, random } = require('../src');

describe('String Utils', () => {
  test('capitalize should uppercase first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('')).toBe('');
  });

  test('truncate should cut string at length', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
    expect(truncate('hi', 10)).toBe('hi');
  });
});

describe('Number Utils', () => {
  test('clamp should restrict value to range', () => {
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(5, 0, 10)).toBe(5);
  });

  test('random should return value in range', () => {
    for (let i = 0; i < 100; i++) {
      const val = random(1, 10);
      expect(val).toBeGreaterThanOrEqual(1);
      expect(val).toBeLessThanOrEqual(10);
    }
  });
});