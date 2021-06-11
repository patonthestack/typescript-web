import { User } from './models/User';
// import axios from 'axios';

const user = User.buildUser({ id: 1 });

user.on('change', () => {
	console.log(user);
});

user.fetch();

// Reminder on how 'this' works in javascript

// const colors = {
// 	color: 'red',
// 	printColor() {
// 		console.log(this.color);
// 		// same as: console.log(colors.color);
// 	},
// };

// const printColor = colors.printColor;

// printColor();

// user.on('change', () => {
// 	console.log('user was changed');
// });

// A quick reminder on accessors

// class Person {
// 	constructor(public firstName: string, public lastName: string) {}

// 	// using 'get' keyword instead of a function, since we are just returning data
// 	get fullName(): string {
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// }

// const person = new Person('firstname', 'lastname');
// console.log(person.fullName);

// axios.get('http://localhost:3000/users/1');

// const user = new User({});

// // user.set({ age: 65 });

// console.log(user.get('name'));
// console.log(user.get('age'));

// user.on('change', () => {
// 	console.log('Change #1');
// });
// user.on('change', () => {
// 	console.log('Change #2');
// });
// user.on('save', () => {
// 	console.log('Save was triggered');
// });

// user.trigger('asdfads');
