class Person{
   // id = "101";
    //name="dhoni";
    constructor(){
        this.id = "107";
        this.name="rahul";
        document.write("<br> object created....")
    }
    displayPersonDetails(){
        document.write("<br> PERSON DETAILS");
        document.write("<br> Id is: "+this.id);
        document.write("<br>Name is: "+this.name);
    }
}
let person = new Person();
person.displayPersonDetails();
document.write("<hr>")

//parameterized constructor
class Employee{
    // id = "101";
     //name="dhoni";
     constructor(name = "Unknown",age = 18){
        
         this.name=name;
         this.age = age;
         document.write("<br> object of employee created....")
     }
     displayEmpDetails(){
         document.write("<br> EMPLOYEEE DETAILS");
         document.write("<br> Age is: "+this.age);
         document.write("<br> Name is: "+this.name);
     }
 }
 let emp1 = new Employee("Manan",23);
emp1.displayEmpDetails();
let emp2 = new Employee("Pawan",22);
emp2.displayEmpDetails();
let emp3 = new Employee("Bala");
emp3.displayEmpDetails();
let emp4 = new Employee();
emp4.displayEmpDetails();
