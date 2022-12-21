const reverseString = require('./reverseString');

test('reverseString function reverses a string', () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH');
});