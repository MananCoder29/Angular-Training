let num = [100,200,300,400,500];

document.write("<br> using classical for loop <br/>");
for(let i=0;i<num.length;i++){
    document.write("<br> value of i is: "+ num[i]);
}
document.write("<br>")
document.write("<br> using for in loop <br>");
for(let index in num){
    document.write("<br> value of "+index+": "+num[index]);
}
document.write("<br>")
document.write("<br> using for of loop <br>");
for(let val of num){
    document.write("<br> value is "+ val);
}