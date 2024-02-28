// // for (let i = 0; i < 10; i++) {
// // 	console.log(`i is ${i}`);
// // }

// const people = ['Andre', 'Bob', 'Sally'];

// // for (let i = 0; i < people.length; i++) {
// // 	console.log(people[i]);
// // }

// //Break and Continue
// for (let i = 0; i < 10; i++) {
// 	if (i === 4) {
// 		// break;
// 		continue;
// 	}

// 	console.log(`i is ${i}`);
// }

// // While loops
// let j = 0;
// while (j < 10) {
// 	console.log(`j is ${j}`);
// 	j++;
// }
// //Do while loops
// let k = 0;
// do {
// 	console.log(`k is ${k}`);
// 	k++;
// } while (k < 10);

//for in loops
const person = {
	firstName: 'Sakiru',
	lastName: 'Alao',
	job: 'Web Developer',
};

for (const x in person) {
	console.log(person[x]);
}

//for of loops
const people = ['Ayomide', 'Akanmu', 'Tonile'];
// for (const y of people) {
// 	console.log(y);
// }

//Foreach method
// people.forEach((person, index) => {
// 	console.log(`Index ${index}: ${person}`);
// });

//Map
const poepleMap = people.map((person, index) => {
	return `${index}:${person}`;
});
console.log(poepleMap);
