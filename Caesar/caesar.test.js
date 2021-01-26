const caesar = require('./caesar.js')

test('Encrypt character A to B', () => {
	expect(caesar('A', 1)).toBe('B')
})

test('Function works with a higher shift number', () => {
	expect(caesar('A', 5)).toBe('F')
})

test('Function accepts the character Z and loops back to beginning of alphabet', () => {
	expect(caesar('Z', 1)).toBe('A')
})

test('Function loops alphabet with a highter shift number', () => {
	expect(caesar('X', 5)).toBe('C')
})

test('Function accepts more than 1 character', () => {
	expect(caesar('ABC', 3)).toBe('DEF')
})

test('Function works lower case', () => {
	expect(caesar('abc', 3)).toBe('def')
})

test('Function loops lower case alphabet', () => {
	expect(caesar('z', 2)).toBe('b')
})

test('Function works with a mix of lower and upper cases', () => {
	expect(caesar('AbCXyZ', 1)).toBe('BcDYzA')
})

test('Function keeps punctuation in place', () => {
	expect(caesar('Hello World!', 1)).toBe('Ifmmp Xpsme!')
})

test('Random Test', () => {
	expect(caesar("Please encrypt this sentence. It's very important!!!", 10)).toBe("Zvokco oxmbizd drsc coxdoxmo. Sd'c fobi swzybdkxd!!!")
})