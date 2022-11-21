// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('if (949) 555-5555 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(949) 555-5555')).toBe(true);
});
test('if (777)777-7777 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(777)777-7777')).toBe(true);
});
test('if 9495555555 is an invalid phone number', () => {
    expect(functions.isPhoneNumber('9495555555')).toBe(false);
});
test('if (777) ABC-DEFG is an invalid phone number', () => {
    expect(functions.isPhoneNumber('(777) ABC-DEFG')).toBe(false);
});

test('if nkarter@ucsd.edu is a valid email', () => {
    expect(functions.isEmail('nkarter@ucsd.edu')).toBe(true);
});
test('if vlsvlk13_23113@gmail.com is a valid email', () => {
    expect(functions.isEmail('vlsvlk13_23113@gmail.com')).toBe(true);
});
test('if prof[AT]ucsd[DOT]edu is an invalid email', () => {
    expect(functions.isEmail('prof[AT]ucsd[DOT]edu')).toBe(false);
});
test('if name@test.abcd is an invalid email', () => {
    expect(functions.isEmail('name@test.abcd')).toBe(false);
});

test('if abcgjdkwies is a strong password', () => {
    expect(functions.isStrongPassword('abcgjdkwies')).toBe(true);
});
test('if a12345______ is a strong password', () => {
    expect(functions.isStrongPassword('a12345______')).toBe(true);
});
test('if _password_ is not a strong password', () => {
    expect(functions.isStrongPassword('_password_')).toBe(false);
});
test('if tooLongOfAPassword is not a strong password', () => {
    expect(functions.isStrongPassword('tooLongOfAPassword')).toBe(false);
});

test('if 1/1/2001 is a valid date', () => {
    expect(functions.isDate('1/1/2001')).toBe(true);
});
test('if 01/01/2005 is a valid date', () => {
    expect(functions.isDate('01/01/2005')).toBe(true);
});
test('if 1/1/22 is an invalid date', () => {
    expect(functions.isDate('1/1/22')).toBe(false);
});
test('if April 11, 2002 is an invalid date', () => {
    expect(functions.isDate('April 11, 2002')).toBe(false);
});

test('if #A7B5C8 is a valid hex color', () => {
    expect(functions.isHexColor('#A7B5C8')).toBe(true);
});
test('if #777 is a valid hex color', () => {
    expect(functions.isHexColor('#777')).toBe(true);
});
test('if #abcdeg is an invalid hex color', () => {
    expect(functions.isHexColor('abcdeg')).toBe(false);
});
test('if ##FFFFFF is an invalid hex color', () => {
    expect(functions.isHexColor('##FFFFFF')).toBe(false);
});