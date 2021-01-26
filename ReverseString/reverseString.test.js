const reverseString = require('./reverseString.js')

test('Return a reversed string', () => {
	expect(reverseString('Hello')).toBe('olleH')
})

test('Reverse a different string', () => {
	expect(reverseString('World')).toBe('dlroW')
})

test('Function reverse a string that has already been reversed', () => {
	expect(reverseString('olleH')).toBe('Hello')
})

test('Function works correct with multiple words', () => {
	expect(reverseString('Hello World')).toBe('dlroW olleH')
})