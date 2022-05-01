const mathOperations = require('./script');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
      expect( mathOperations.sum(1, 2)).toBe(3);
    });

    test('adding 0.1 + 0.2 should return 0.3', () => {
        expect( mathOperations.sum(1, 2)).toBeCloseTo(3);
    });

    test('subtracting "a" - "b" should return NaN', () => {
      expect( mathOperations.diff("a" - "b")).toBe(NaN);
    });

    test('adding "23" - "12" should return 11', () => {
      expect( mathOperations.diff(23, 12)).toBe(11);
    });

    test('adding undefined * undefined should return NaN', () => {
      expect( mathOperations.product(undefined, undefined)).toBe(NaN);
    });

    test('adding 100 * Infinity should return Infinity', () => {
      expect( mathOperations.product(100, Infinity)).toBe(Infinity);
    });

})

