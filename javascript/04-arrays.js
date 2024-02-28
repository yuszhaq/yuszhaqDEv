const people = ['Alao', 'Ayomide', 'Sakiru', 'Muhaammed'];
const number = [1, 2, 6, 3, 5];
const mixed = ['A String', 35, true, { a: 1 }, null, undefined, [1, 2, 3]];

// console.log(people[2]);
// console.log(people.length);

// people.push('Ajoke');
// console.log(people);

// const ajoke = people.pop();
// console.log(people);
// console.log(ajoke);

number[2] = 36;
console.log(number);

// people.unshift('Tonile Family');
// console.log(people);

// people.shift();
// console.log(people);

console.log(people.includes('Ayomide'));
console.log(people.indexOf('Ayomide'));
// console.log(people.reverse());

const joinedArray = people.concat(number);
console.log(joinedArray);
