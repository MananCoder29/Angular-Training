let num = [10,20,30,40,50];

num.forEach(function(v){
    document.write("<br> value is:"+v);
})
document.write("<br> retrieve element from array using arrow func");
num.forEach(v=> document.write("<br> value is "+v));