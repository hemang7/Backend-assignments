const { expect } = require('@jest/globals')
const {sub, mul, div} = require('./math')

test('Subtraction ', () => {
    expect(sub(1, 1)).toBe(0);
})

test('Multiplication', () => {
    expect(mul(1, 1)).toBe(1)
})

test('Division', () => {
    expect(div(1, 1)).toBe(1)
})