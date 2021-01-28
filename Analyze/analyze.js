const analyze = {
	average: (array) => {
		const sum = array.reduce((accum, current) => {
			return accum + current
		})

		return sum / array.length
	},

	min: (array) => {
		return Math.min(...array)
	},

	max: (array) => {
		return Math.max(...array)
	},

	length: (array) => {
		return array.length
	}
}

module.exports = analyze