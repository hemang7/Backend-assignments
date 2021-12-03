const { test, expect } = require('@jest/globals')
const {Registration} = require('./6')

test("Registration validation", () => {
    expect(Registration("test","123","user")).toBe("Registration Successful!")
})