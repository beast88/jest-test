const analyze = require('./analyze.js')

test('Return the average of the given array', () => {
	expect(analyze.average([1, 8, 3, 4, 2, 6])).toBe(4)
})

test('Return the min value of the given array', () => {
	expect(analyze.min([1, 8, 3, 4, 2, 6])).toBe(1)
})

test('Return the max value of the given array', () => {
	expect(analyze.max([1, 8, 3, 4, 2, 6])).toBe(8)
})

test('Return the length of given array', () => {
	expect(analyze.length([1, 8, 3, 4, 2, 6])).toBe(6)
})