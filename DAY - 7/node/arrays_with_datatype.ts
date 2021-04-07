//array declaration using literal style
let n1:number[] = [100,200,300,400];
let stdnames: string[]=["manan","prithvi","bala"];
let info:any[] = [100,"akash","true",200];

//array declaration using generic style
let n2:Array<number> = [100,200,300,400,500];
let names:Array<string> = ["seeta","geeta","preeta"];
let details : Array<any> = [200,"balu",true];

n1.forEach(v => console.log(v));

let n:number[] = new Array();//using new keyword
let m:number[] = [];//literal style
n.push(100);
n.push(200);
m.push(100);
m.push(300);
console.log("size of n is "+n.length);
console.log("value of n is: "+n);

