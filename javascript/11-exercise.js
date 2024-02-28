function convertMinutesToSeconds(minutes) {
	return minutes * 60;
}
// console.log(convertMinutesToSeconds(2));
// console.log(convertMinutesToSeconds(3));

function ensureQuestion(str) {
	const lastChar = str.charAt(str.length - 1);

	if (lastChar === '?') {
		return str;
	}
	return `${str}?`;

	// return lastChar === '?' ? str : `${str}?`;
}
// console.log(ensureQuestion('Yes'));
// console.log(ensureQuestion('No'));
// console.log(ensureQuestion('Hello?'));

function maxOfNumbers(numbers) {
	// let maxNumber = numbers[0];

	// for (let i = 0; i < numbers.length; i++) {
	// 	if (numbers[i] > maxNumber) {
	// 		maxNumber = numbers[i];
	// 	}
	// }
	// numbers.forEach((number) => {
	// 	if (number > maxNumber) {
	// 		maxNumber = number;
	// 	}
	// });
	// return maxNumber;

	return Math.max(...numbers);
}
// console.log(maxOfNumbers([1, 5, 3]));
// console.log(maxOfNumbers([1, 2, 3, 10, 100]));

// Hello there -> HeLlO ThErE
function sarcasticCase(str) {
	let newString = '';
	for (i = 0; i < str.length; i++) {
		// 	if (i % 2 === 0) {
		// 		newString += str[i].toUpperCase();
		// 	} else {
		// 		newString += str[i].toLowerCase();
		// 	}
		newString = i % 2 === 0 ? newString + str[i].toUpperCase() : newString + str[i].toLowerCase();
	}
	return newString;
}
// console.log(sarcasticCase('Hello there'));
// console.log(sarcasticCase('React is a library'));

function noSpace(str) {
	// let newString = '';
	// for (i = 0; i < str.length; i++) {
	// 	if (str[i] !== ' ') {
	// 		newString = newString + str[i];
	// 	}
	// }
	// return newString;

	return str.split(' ').join('');
}
console.log(noSpace('Hello there'));
console.log(noSpace('I am cool'));
