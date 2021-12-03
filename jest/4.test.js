const { test, expect } = require('@jest/globals')
const {library, checkBookId} = require('./4')

test ('Check book Id', () => {
    expect(checkBookId(4)).not.toBeNull()
    expect(checkBookId(10)).toBeNull()
})