const { test, expect } = require('@jest/globals')
const {login, userArray} = require('./5')

test('Validating login', () => {
    expect(login("test","test")).toBe("Valid user")
})