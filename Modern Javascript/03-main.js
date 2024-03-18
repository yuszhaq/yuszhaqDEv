'use strict';

let users = [
	{
		name: 'Alao',
		email: 'yuszhaq@gmail.com',
	},
	{
		name: 'Sakiru',
		email: 'yusplug@gmail.com',
	},
];

let names = [];

// users.forEach(function (user) {
//   names.push(user.name)
// });

users.forEach((user) => names.push(user.name));

document.getElementById('output').innerHTML = names.join(', ');

document.getElementById('btn').addEventListener('click', (event) => {
	const getDetails = () => {
		console.log(event.currentTarget);

		return `The buttin id is ${event.currentTarget.getAttribute('id')}`;
	};

	document.getElementById('output').innerHTML = getDetails();
});
