const capitalize = require('./capitalize');

test('capitalize function', () => {
    expect(capitalize('hello')).toBe('Hello');
});