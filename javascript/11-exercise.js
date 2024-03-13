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
	// 		newString += str[i];
	// 	}
	// }
	// return newString;

	return str.split(' ').join('');
}
// console.log(noSpace('Hello there'));
// console.log(noSpace('I am cool'));

function squareSum(numbers) {
	// let result = 0;

	// numbers.forEach((number) => {
	// 	result += number * number;
	// });
	// return result;

	return numbers.map((number) => number * number).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}
// console.log(squareSum([1, 2, 3]));
// console.log(squareSum([3, 5]));

function positivesum(numbers) {
	// let total = 0;
	// // for (i = 0; i < numbers.length; i++) {
	// // 	if (numbers[i] > 0) {
	// // 		total += numbers[i];
	// // 	}
	// // }
	// numbers.forEach((number) => {
	// 	if (number > 0) {
	// 		total += number;
	// 	}
	// });
	// return total;
	return numbers.filter((number) => number > 0);
}
console.log(positivesum([1, 2, -5, 3]));
console.log(positivesum([3, 2, -4, 5]));
