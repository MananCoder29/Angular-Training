function dis1(){
    document.write("<br> NORMAL FUNCTION STYLE");
}
dis1();
let abc =function dis2(){
    document.write("<br> EXPRESSION FUNCTION STYLE WITH NAME");
}
//dis2();
abc();

let dis3 = function(){
    document.write("<br> EXPRESSION FUNCTION STYLE WITH ANNONYMOUS FUNCTION");
}
dis3();
document.write("<br>");
//normal function with parameter
document.write("<br> NORMAL FUNCTION WITH PARAMETER")
function empDetails(id,name,salary){
    document.write("<br> Id is: " + id);
    document.write("<br> Name is: " + name);
    document.write("<br> Salary is: " + salary);
}
empDetails(100,"Ramesh",12000);
empDetails(101,"Rakesh");
empDetails(102);
empDetails();
document.write("<br>");
document.write("<br> FUNCTION WITH DEFAULT INITIALIZATION")
function empDetails1(id=123,name="Unknown",salary=1000){
    document.write("<br> Id is: " + id);
    document.write("<br> Name is: " + name);
    document.write("<br> Salary is: " + salary);
}
empDetails1(100,"Ramesh",12000);
empDetails1(101,"Rakesh");
empDetails1(102);
empDetails1();
document.write("<br>");
document.write("<br> FUNCTION WITH REST AND SPREAD PARAMETER")
function studentInfo(sid,sname,age,...skillset){
    document.write("<br>  Student Id is: " + sid);
    document.write("<br> Student Name is: " + sname);
    document.write("<br> Student age is: " + age);
    document.write("<br>Number of skillset is/are: "+skillset.length);
    document.write("<br> Skill set is/are: "+skillset);
}
studentInfo(1,"ravi",20);
document.write("<hr>")
studentInfo(1,"ramesh",20,"C");
document.write("<hr>")
studentInfo(1,"suresh",20,"C","C++","Java");
document.write("<hr>")
studentInfo(1,"ajay",20,"HTML5","CSS3","JS","Angular JS");
document.write("<hr>")
studentInfo(1000,"veer",23, ["C","C++","Java","Python"]);
document.write("<hr>")
let skillInfo = ["C","C++","Java","Python"];

studentInfo(1001,"vanita",25,...skillInfo);