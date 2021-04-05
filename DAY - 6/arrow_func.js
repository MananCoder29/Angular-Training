let dis1 = function(){
    document.write("<br> expression style function");
}
dis1();
let addNumber = function(a,b){
     return a+b;
}
document.write("<br> sum of 2 numbers using expression style is: "+ addNumber(100,250));
let largestOfTwo = function(a,b){
    if(a>b){
        return " a ";
    }else{
        return " b ";
    }
}
document.write("<br> largest of two number using expression style is: "+ largestOfTwo(12,67));

let dis2 = () => document.write("<br> arrow function");
dis2();
let sumOfNumber = (a,b) => a+b;
document.write("<br> sum of 2 numbers using arrow style is: "+ addNumber(100,250));
let biggestOfTwo = (a,b) => {
      if(a>b){
          return "a ";
      }else{
          return "b ";
      }
}
document.write("<br> biggest of two number using arrow style is: "+ biggestOfTwo(12,67));