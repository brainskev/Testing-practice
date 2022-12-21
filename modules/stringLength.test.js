const stringLength = require('./stringLength');


test('Throws an error for strings shorter than 1 character', () => {
    expect(() => stringLength('').toThrow('string must be atleast 1 character long'));
});

test('Throws an error for strings longer than 10 characters', () => {
    expect(() => stringLength('qrtydbsjrgehfuf').toThrow('string cannot be longer than 10 characters'));
});

test('Returns the correct string length for valid strings', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('helloworld')).toBe(10);
    expect(stringLength('hel')).toBe(3);
    expect(stringLength('h')).toBe(1);
});



