const { test, expect } = require('@jest/globals')
const {returnBookDataById, library} = require('./3')

test('Return bookname by id', () => {
    expect(returnBookDataById(3)).not.toBeNull()
    expect(returnBookDataById(7)).toBeNull()
})

