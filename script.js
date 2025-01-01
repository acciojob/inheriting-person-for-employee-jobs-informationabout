
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        const message = `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        document.getElementById("output").textContent = message;
        console.log(message);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); 
        this.jobTitle = jobTitle;
    }

    // Job greet method for Employee
    jobGreet() {
        const message = `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
        document.getElementById("output").textContent = message;
        console.log(message);
    }
}
function createPerson() {
    const alice = new Person("Alice", 25);
    alice.greet();
}

function createEmployee() {
    const bob = new Employee("Bob", 30, "Manager");
    bob.jobGreet();
}

// Make classes available for testing
window.Person = Person;
window.Employee = Employee;
