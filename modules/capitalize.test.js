const capitalize = require('./capiatalize');

test('capitalize function', () => {
    expect(capitalize('hello')).toBe('Hello');
});