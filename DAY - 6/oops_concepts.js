function Employee(){
    this.id = "100";
    this.name = "amit";
    this.displayEmpDetails = function(){
        document.write("<br> This is employee class(ES5) style function");
        document.write("<br>ID is: "+this.id);
        document.write("<br>Name is: "+this.name);
    }
}
let emp = new Employee();
emp.displayEmpDetails();


class Person{
    id = "1000";
    name = "Manan";
    displayPersonInfo(){
        document.write("<br> This is person class(ES6) style function")
        document.write("<br>ID is: "+this.id);
        document.write("<br>Name is: "+this.name);
    }
}
let person = new Person();
person.displayPersonInfo();