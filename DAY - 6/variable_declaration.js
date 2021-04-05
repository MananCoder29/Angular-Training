var a = 10;
document.write("<br>"+a);
a = 20;
document.write("<br>"+a);
var a ="manan"
document.write("<br>"+a);
let b= 100;
b = 200;
document.write("<br>"+b);
function sayhello(name){
    if(name == "manan"){
        var msg = "welcome " + name;
    }else{
        msg = "welcome guest";
    }
    return msg;
}
document.write("<br>" + sayhello("manan"));
for(var i=0;i<1000;i++){}
document.write("<br>" + i);
for(let j=0;j<1000;j++){}
//document.write("<br>" + j);
const c = 1000;// they have local/block scope like let but they cant be re-assigned.
c = 2000;