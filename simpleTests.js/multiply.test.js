const multiply = require('./multiply')

test('properly multiply two numbers', () => {
    expect(multiply(3, 3)).toBe(9)
    expect(multiply(-3, 3)).toBe(-9)
})