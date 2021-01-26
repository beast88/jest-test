const caesar = (string, shift) => {
	let solved = ''

	for(let i = 0; i < string.length; i++){ 
		let currentAsciiNum = string[i].charCodeAt()

		let asciiNum = string[i].charCodeAt() + shift

		if(currentAsciiNum >= 65 && currentAsciiNum <= 90){

			if(asciiNum > 90){
				solved += String.fromCharCode(asciiNum - 26)
			} else {
				solved += String.fromCharCode(asciiNum)
			}

		} else if(currentAsciiNum >= 97 && currentAsciiNum <= 122) {

			if(asciiNum > 122) {
				solved += String.fromCharCode(asciiNum - 26)
			} else {
				solved += String.fromCharCode(asciiNum)
			}

		} else {
			solved += string[i]
		}


	}

	return solved

}

module.exports = caesar

// a b c d e f g h i j k l m n o p q r s t u v w x y z