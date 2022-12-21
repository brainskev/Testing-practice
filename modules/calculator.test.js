const Calculator = require('./calculator');

describe('Calculator.add()', () => {
    test('adds two positive numbers', () => {
        expect(Calculator.add(2, 3)).toBe(5);
    });

    test('adds a positive and a negative number', () => {
        expect(Calculator.add(2, -3)).toBe(-1);
    });

    test('adds two negative numbers', () => {
        expect(Calculator.add(-2, -3)).toBe(-5);
    });
});

describe('Calculator.subtract()', () => {
    test('subtracts two positive numbers', () => {
        expect(Calculator.subtract(5, 3)).toBe(2);
    });

    test('subtracts a positive and a negative number', () => {
        expect(Calculator.subtract(2, -3)).toBe(5);
    });

    test('subtracts two negative numbers', () => {
        expect(Calculator.subtract(-2, -3)).toBe(1);
    });
});

describe('Calculator.divide()', () => {
    test('divides two positive numbers', () => {
        expect(Calculator.divide(6, 3)).toBe(2);
    });

    test('divides a positive and a negative number', () => {
        expect(Calculator.divide(6, -3)).toBe(-2);
    });

    test('divides two negative numbers', () => {
        expect(Calculator.divide(-6, -3)).toBe(2);
    });
});

describe('Calculator.multiply()', () => {
    test('multiplies two positive numbers', () => {
        expect(Calculator.multiply(2, 3)).toBe(6);
    });

    test('multiplies a positive and a negative number', () => {
        expect(Calculator.multiply(2, -3)).toBe(-6);
    });

    test('multiplies two negative numbers', () => {
        expect(Calculator.multiply(-2, -3)).toBe(6);
    });
});
