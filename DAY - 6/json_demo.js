let empStringFormat = '{"id":100,"name":"manan","skill":["C","Java","Angular"],"address":{"city":"Bangalore","state":"Kar"}} ';
document.write(empStringFormat);
document.write("<br>");
document.write("<br> Id is:" + empStringFormat.id);
document.write("<br> Name is: "+empStringFormat.name);
//Convert string to JSON
let empJSON = JSON.parse(empStringFormat);
document.write("<br> after parsing");
document.write("<br> Id is:" + empJSON.id);
document.write("<br> Name is: "+empJSON.name);
document.write("<br> Skill details:" + empJSON.skill[0]);
document.write("<br> Skill details: "+empJSON.skill[1]);
document.write("<br> Skill details: "+empJSON.skill[2]);
document.write("<br> City details: "+empJSON.address.city);
document.write("<br> State details: "+empJSON.address.state);
//Convert JSON to string
let empStringFormat1 = JSON.stringify(empJSON);
document.write("<br>" + empStringFormat1);
document.write("<br> Id is: "+ empStringFormat1.id);


