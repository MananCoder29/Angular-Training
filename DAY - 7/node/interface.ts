
interface Abc{
    id:number;
    display():void
}
class Some implements  Abc{
    id:number = 45;
    display():void{
        console.log("id is "+this.id);
    }
}
interface Emmployee{
    id:number;
    name:string;
    salary:number;
    age?:number;
}
let emp1:Emmployee = {"id":100,"name":"manan","salary":23000};
let emp2:Emmployee = {"id":101,"name":"balaji","salary":13000};
let emp3:Emmployee = {"id":102,"name":"pruthvi","salary":25000};