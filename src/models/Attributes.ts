export class Attributes<T> {
	constructor(private data: T) {}

	// letter 'K' represents a type, just like 'T'
	// this get takes in the Type such as a type we created
	// like UserProps.  Within UserProps there is name, age, id
	// which is a string or a number, so whatever key is passed in,
	// that is what is returned T[K], or the 'type of the key'
	get = <K extends keyof T>(key: K): T[K] => {
		return this.data[key];
	};

	set(update: T): void {
		Object.assign(this.data, update);
	}

	getAll(): T {
		return this.data;
	}
}

// example of the get with returning T[K]:
// const attrs = new Attributes<UserProps>({
// 	id: 5,
// 	age: 20,
// 	name: 'Patty',
// });

// const name = attrs.get('name');
// const age = attrs.get('age');
// const id = attrs.get('age');
