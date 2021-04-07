class Employee {
    constructor(id = 0, name = "unknown", salary = 12000) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log("Employee class function");
        console.log("Id is: " + this.id);
        console.log("Name is: " + this.name);
        console.log("Salary is: " + this.salary);
    }
}
let emp1 = new Employee();
emp1.display();
let emp2 = new Employee(101);
emp2.display();
let emp3 = new Employee(102, "manan");
emp3.display();
let emp4 = new Employee(103, "rahul", 14000);
emp4.display();
console.log(emp4.id);
console.log(emp4.name);
//console.log(emp4.salary);
class Person {
    constructor(id = 0, name = "unknown", salary = 12000) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log("Employee class function");
        console.log("Id is: " + this.id);
        console.log("Name is: " + this.name);
        console.log("Salary is: " + this.salary);
    }
}
let person = new Person(1122, "Rohit", 25000);
person.display();
