const { test, expect } = require('@jest/globals')
const {Matchers} = require('./7')

test("Check register & login", () => {
    expect(Matchers.returnReg("admin", "12345", "user")).toEqual("Registration Successful!");

    expect(Matchers.returnReg("rahul","321","admin")).toEqual("Registration Successful!")
})

test("Check login()", ()=> {
    expect(Matchers.returnLog("admin","12345")).toEqual("Valid User");
    
    expect(Matchers.returnLog("hemang","765588")).toEqual("Invalid User");
})