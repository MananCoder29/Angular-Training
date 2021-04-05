let num =[10,20,30,40,50];

num.forEach(display);

//1st way
function display(n){
    document.write("<br> <font color='red' style='background-color:yellow;'> value is "+n +"</font>");
}
//2nd way
num.forEach(function display(n){
    document.write("<br> value is func body "+n);
})
//3rd way
num.forEach(function(n){
    document.write("<br> value is func body with annonymous "+n);
})

num.forEach(function(v){
    document.write("<br> value is:  "+v);
})
