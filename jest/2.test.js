const { expect, test } = require('@jest/globals')
const {largest2, largest3, evenOdd, fact, largest, checkArray} = require('./2')

test('Largest of 2', () => {
    expect(largest2(4,7)).toBe(7)
})

test('Largest of 3', () => {
    expect(largest3(3,4,5)).toBe(5)
}
)

test('Factorial', () => {
    expect(fact(5)).toBe(120)
})

test('Odd-Even', () => {
    expect(evenOdd(50)).toBeTruthy();
})

test("Largest in array", () => {
    expect(largest(1,2,3)).toBe(3);
})

test("Element in array", () => {
    expect(checkArray(3)).toBeTruthy();
})