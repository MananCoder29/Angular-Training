var con = false;
let obj = new Promise((resolve,reject)=>{
 if(con){
     resolve("task completed successfulyy!!");
 }else{
     reject("Failure!");
 }
})

obj.then(data=>console.log("In then "+data)).catch(error=>console.log("In catch "+error));