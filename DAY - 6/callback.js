function sayHello(fname,callback){
   return  "User," + callback(fname);
}

function maleInfo(name){
    return "Welcome Mr. "+name;
}
function femaleInfo(name){
    return "Welcome Miss. "+name;
}

document.write("<br>" + sayHello("ramesh", maleInfo));
document.write("<br>");
document.write("<br>" + sayHello("ramya", femaleInfo));
document.write("<br>")
document.write("<br>" + sayHello("ajay", function maleInfo(name){
    return "Welcome Mr. "+name;
}));
document.write("<br>");
document.write("<br>" + sayHello("kumari", function(name){
    return "Welcome Miss. "+name;
}));
