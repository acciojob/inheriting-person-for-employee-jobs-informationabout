// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.greet = function () {
	document.getElementById("output").textContent = `Hello, my name is ${this.name}, I am ${this.age} years old.`
}
function createPerson() {
	const omkar = new Person("Omkar", 26)
	omkar.greet();
}
function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
	this.jobTitle = jobTitle;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
            document.getElementById("output").textContent = `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`;
        };
function createEmployee() {
            const omkar = new Employee("Omkar", 26, "Manager");
            omkar.jobGreet(); 
        }

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
