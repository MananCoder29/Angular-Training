// class Employee{                                 //Super class, base class, parent class
//     disEmployee(){
//         document.write("<br> This is employee class");
//     }

// }

// class Manager extends Employee{                // Sub class, derived class, child class
//     disManager(){
//       document.write("<br> This is manager class");
//     }
// }

// let employ = new Employee();
// employ.disEmployee();
// let mgr = new Manager();
// mgr.disManager();
// mgr.disEmployee();

class Bike{
    speed(){
        document.write("<br>60kmph");
    }
}
class Pulsar extends Bike{
    speed(){                 // function overriding
        super.speed();       
        document.write("<br>90kmph");
    }
}
let pulsar = new Pulsar();
pulsar.speed();

let bike = new Bike;
bike.speed();