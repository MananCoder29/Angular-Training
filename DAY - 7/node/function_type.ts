function add(a:number,b:number){
    let sum = a+b;
    console.log("Sum is: "+sum);
}
add(10,20);
//add("10",20);

function sayHello(name:string):string{
    return "Hello "+name;
}
console.log(sayHello("Manan"));

function empInfo(id:number,name:string,salary:number){
    console.log("Id is "+id);
    console.log("Name is "+name);
    console.log("Salary is "+salary);
}