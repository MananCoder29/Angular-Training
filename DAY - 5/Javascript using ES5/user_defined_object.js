// function Employee(){
//     this.id = 105;
//     this.name = "manan";
//     this.age = "22";
//     this.dis = function(){
//         document.write("Employee class (Es5 style) Function");
//         document.write("<br> Id is: " + this.id);
//         document.write("<br> Name is: " + this.name);
//         document.write("<br> Age is: "+this.age);
        
//     }
// }
//     var emp1 = new Employee();
//     emp1.dis();
//     alert(emp1.id);
//     alert(emp1.name);
//     alert(emp1.age);

//parameterized ES5 Style object creation
function Employee(id,name,age){
    this.id = id;
    this.name = name;
    this.age = age;
    this.dis = function(){
        document.write("<br>Employee class (Es5 style) Function");
        document.write("<br> Id is: " + this.id);
        document.write("<br> Name is: " + this.name);
        document.write("<br> Age is: "+this.age);
        document.write("<br>")
        
    }
}
    var emp1 = new Employee(100,"ramesh",21);
    var emp2 = new Employee(101,"suresh",22);
    Employee.prototype.skillset = "Javascript";
    //alert("first employee skillset  " + emp1.skillset);
    //alert("second employee skillset " + emp2.skillset);
    emp1.skillset = "HTML5/CSS3";
    alert("first employee skillset  " + emp1.skillset);
    alert("second employee skillset " + emp2.skillset);
    Employee.prototype.info = function(){
        document.write("Skillset is:" + this.skillset +"<br>");
    }

    emp1.dis();
    emp1.info();
    emp2.dis();
    emp2.info();
