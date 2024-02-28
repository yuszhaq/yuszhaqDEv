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
	howOldAmI: function () {
		console.log(`I am ${this.age} years old.`);
	},
};
// console.log(person.age);
// console.log(person['last-name']);
person.hairColor = 'Black';
//console.log(person);

delete person.isCool;

person.howOldAmI();

const groupOfPoeple = [
	{
		name: 'Alao',
		age: 31,
	},
	{
		name: 'Ajoke',
		age: 26,
	},
	{
		name: 'Muahmmed',
		age: 1,
	},
	{
		name: 'yusirat',
		age: 15,
	},
];

console.log(groupOfPoeple);
