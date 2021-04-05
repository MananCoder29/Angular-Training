function storeSesssion(){
    sessionStorage.setItem("obj1",10);
    console.log("Data stored in session scope..")
}
function retrieveSession(){
    console.log("get data from session " + sessionStorage.getItem("obj1"));
}
function storeLocal(){
    localStorage.setItem("obj3",20);
    console.log("Data stored in Local scope..")
}
function retrieveLocal(){
    console.log("get data from local " + localStorage.getItem("obj3"));
}