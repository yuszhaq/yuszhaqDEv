// if (false) {
// 	console.log('This is the true part of the Of staement');
// }

// const age = 25;
// const drinkingAge = 19;

// // if (age >= drinkingAge) {
// // 	console.log('I can drink beer!!');
// // } else {
// // 	console.log('I cannot drink alcohol yet');
// // }

// if (age >= drinkingAge) console.log('I can drink beer!!');
// else console.log('I cannot drink alcohol yet');

// const passwordTypedIn = 'password';
// const actualPassword = 'password';

// if (passwordTypedIn === actualPassword) {
// 	console.log('Correct password, logging you in.');
// } else {
// 	console.log('Password incorrect. Please try again.');
// }

// const month = 'October';
// const day = 30;

// if (month === 'October' && day === 31) {
// 	console.log('It is Halloween');
// } else {
// 	console.log('It is NOT Halloween');
// }

// // > 80 = A
// // 70 - 80 = B
// // 60 - 70 = C
// // 50 - 60 = D
// // < 50 = F

// const grade = 42;

// if (grade >= 80) {
// 	console.log('Letter Grade: A');
// } else if (grade >= 70) {
// 	console.log('Letter Grade: B');
// } else if (grade >= 60) {
// 	console.log('Letter Grade: C');
// } else if (grade >= 50) {
// 	console.log('Letter Grade: D');
// } else {
// 	console.log('Letter Grade: F');
// }

// //Ternary
// age >= drinkingAge ? console.log('I can drink beer!!') : console.log('I cannot drink alcohol yet');

// // let canIDrinkMessage;
// // if (age >= drinkingAge) {
// // 	canIDrinkMessage = 'I can drink beer!!';
// // } else {
// // 	canIDrinkMessage = 'I cannot drink alcohol yet';
// // }

// // let canIDrinkMessage = age >= drinkingAge ? 'I can drink beer!!' : 'I cannot drink alcohol yet.';
// console.log(age >= drinkingAge ? 'I can drink beer!!' : 'I cannot drink alcohol yet.');

const trafficLight = 'green';

if (trafficLight === 'green') {
	console.log('GO');
} else if (trafficLight === 'yellow') {
	console.log('Slow down');
} else if (trafficLight === 'red') {
	console.log('STOP');
} else {
	('Traffic light is broken');
}

switch (trafficLight) {
	case 'green':
		console.log('GO');
		break;

	case 'yellow':
		console.log('Slow down');
		break;

	case 'red':
		console.log('STOP');
		break;

	default:
		console.log('Trafic light is broken');
}

const grade = 62;

if (grade >= 80) {
	console.log('Letter Grade: A');
} else if (grade >= 70) {
	console.log('Letter Grade: B');
} else if (grade >= 60) {
	console.log('Letter Grade: C');
} else if (grade >= 50) {
	console.log('Letter Grade: D');
} else {
	console.log('Letter Grade: F');
}

switch (true) {
	case grade >= 80:
		console.log('Letter Grade: A');
		break;

	case grade >= 70:
		console.log('Letter Grade: B');
		break;

	case grade >= 60:
		console.log('Letter Grade: C');
		break;

	case grade >= 50:
		console.log('Letter Grade: D');
		break;

	default:
		console.log('Letter Grade: F');
}

const animal = 'Giraffe';

switch (animal) {
	case 'Cow':
		console.log('I am a cow');
	case 'Giraffe':
		console.log('I am a giraffe');
	case 'Dog':
	case 'Goat':
		console.log('This animal is Not extinct');
		break;
	case 'Dinosaur':
	case 'Dodo':
	default:
		console.log('This animal is extinct');
}
