const calc = require('./calculator.js')

test('Sum 1 + 2', () => {
	expect(calc.sum(1, 2)).toBe(3)
})

test('Sum 5 + 4', () => {
	expect(calc.sum(5, 4)).toBe(9)
})

test('Works with negative numbers', () => {
	expect(calc.sum(-11, 3)).toBe(-8)
})

test('Subtract 9 - 3', () => {
	expect(calc.subtract(9, 3)).toBe(6)
})

test('Subtract 4 - 2', () => {
	expect(calc.subtract(4, 2)).toBe(2)
})

test('Works with negative numbers', () => {
	expect(calc.subtract(-2, 2)).toBe(-4)
})

test('Multiply 2 * 2', () => {
	expect(calc.multiply(2, 2)).toBe(4)
})

test('Multiply 4 * 5', () => {
	expect(calc.multiply(4, 5)).toBe(20)
})

test('Work with 0', () => {
	expect(calc.multiply(2, 0)).toBe(0)
})

test('Divide 10 / 5', () => {
	expect(calc.divide(10, 5)).toBe(2)
})

test('Divide 8 / 2', () => {
	expect(calc.divide(8, 2)).toBe(4)
})

test('Work with 1', () => {
	expect(calc.divide(2, 1)).toBe(2)
})