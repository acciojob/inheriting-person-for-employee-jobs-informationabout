// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.greet = function () {
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
}
function createPerson() {
	const alice = new Person("Alice", 25)
	alice.greet();
}
function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
	this.jobTitle = jobTitle;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
            console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
        };
function createEmployee() {
            const bob = new Employee("Bob", 30, "Manager");
            bob.jobGreet(); 
        }

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
