import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { Employee } from "./model.employee";

@Injectable()            //Angular service class
export class EmployeeService{
    constructor(public http:HttpClient){}  //DI for http client
    
    dispalyFakeInTableFormat():Observable<Employee[]>{
        return this.http.get<Employee[]>('http://localhost:3000/employees')
    }
    storeEmployee(empRef:any){
        this.http.post("http://localhost:3000/employees",empRef).subscribe(data=>console.log(data));
    }
}