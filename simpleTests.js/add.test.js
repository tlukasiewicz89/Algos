const add = require('./add.js')

// first argument is a string of what you are testing
// second arg is the function which runs the test
test('properly adds two numbers', () => {
    // expect function
    // tons of functions to use like toBe, toNotBe, toBeNull
    expect(
        add(1, 3)
    ).toBe(4);
})