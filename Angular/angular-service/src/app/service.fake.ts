import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { Fake } from "./model.fake";
@Injectable()            //Angular service class
export class FakeService{
    constructor(public http:HttpClient){}  //DI for http client
    sayHello():string{
        return "Welcome to fake service with DI";
    }

    callFakeService(){
        this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(data=>console.log(data),
        error=>console.log(error),()=>console.log("completed"));
    }
    dispalyFakeInTableFormat():Observable<Fake[]>{
        return this.http.get<Fake[]>('https://jsonplaceholder.typicode.com/todos')
    }
}