import { Pipe } from "@angular/core";

@Pipe({
    name:"designPipe"
})
export class DesignationPipe implements Transformer{
        transform(value:any):any{
            //console.log("Value "+value);
           
            if(value < 15000){
               return "Tester";
            }else if(value <= 50000){
                return "Developer";
            }else if(value > 50000){
                return "Manager";
            }
            }
        }