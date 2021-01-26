const capitalize = require('./capitalize.js')

test('Returns capitalized string', () => {
	expect(capitalize('hello')).toBe('Hello')
})

test('Return capitalized random string', () => {
	expect(capitalize('world')).toBe('World')
})