import { Pipe } from "@angular/core";

@Pipe({
    name:"genderPipe"
})
export class GenderPipe implements Transformer{
        transform(value:string,gender:any):any{
            //console.log("Value "+value);
            //console.log("Gender "+gender);
            if(gender=="male"){
               return "Mr. "+value;
            }else {
               return "Miss."+value;
            }
        }
}