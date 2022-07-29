function printLine(text, quantity, character, leftBorder, rightBorder) {
	text += character.repeat(quantity - text.length);
	console.log(leftBorder + text + rightBorder);
}

function framePhrase(phrase){
	let arrayPhrase = phrase.split(' ')
	let max = Math.max(...arrayPhrase.map(el => el.length))
	printLine('', max, '*', '**', '**')
	arrayPhrase.forEach(element => printLine(element, max, ' ', '| ', ' |'))
	printLine('', max, '*', '**', '**')
}

framePhrase("¿Qué te parece el reto?")
