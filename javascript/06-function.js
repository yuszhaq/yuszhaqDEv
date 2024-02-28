// //Functioin declaration / function definitionj
// function sayHello(firstName = 'Tonile', lastName = 'Olowo') {
// 	//function body
// 	console.log('Hello');
// 	console.log(firstName);
// 	console.log(lastName);
// }
// // function sayHello2() {
// // 	//function body
// // 	console.log('Hello');
// // 	console.log('Ajoke');
// // }

// sayHello('Sakiru', 'Alao');
// sayHello('Raheemat', 'AbdurRaheem');
// sayHello();

// function add(num1, num2) {
// 	return num1 + num2;

// 	// return sum;
// }

// const result = add(2, 3);
// console.log(result);

// function sayHelloAgain(firstName = 'Tonile', lastName = 'Olowo') {
// 	return `Hello ${firstName} ${lastName}`;
// }

// console.log(sayHelloAgain('Sakiru', 'Alao'));

// //A method is where an object is associated with a function
// const person = {
// 	fisrtName: 'Sakiru',
// 	'last-name': 'Alao',
// 	age: '30',
// 	isCool: false,
// 	hobbies: ['video games', 'guiter'],
// 	adddress: {
// 		street: '123 Address Str.',
// 		City: 'Toronto',
// 		Country: 'Canada',
// 	},
// 	howOldAmI: function () {
// 		console.log(`I am ${this.age} years old.`);
// 	},
// };

// person.howOldAmI();

// helloAgain('Yuszhaq');

const hello = (firstName) => `Hello ${firstName}`;

console.log(hello('Yuszhaq'));
// function helloAgain(firstName) {
// 	console.log(`Function Declaration Hello ${firstName}`);
// }

// hello('Alao');

///hello('Yuszhaq');

//IIFE _ Immediately Invokable Function Expression
// (function (firstName) {
// 	console.log(`Hello ${firstName}`);
// })('Yuszhaq');

const add = (num1, num2) => num1 + num2;

console.log(add(2, 3));

const person = {
	fisrtName: 'Sakiru',
	'last-name': 'Alao',
	age: '30',
	isCool: false,
	hobbies: ['video games', 'guiter'],
	adddress: {
		street: '123 Address Str.',
		City: 'Toronto',
		Country: 'Canada',
	},
	howOldAmI() {
		console.log(`I am ${person.age} years old.`);
	},
};

person.howOldAmI();

//Callback Function
const button = document.querySelector('button');
const greeting = () => {
	console.log('Hello there');
};

button.addEventListener('click', () => {
	console.log('Anon function called');
});
