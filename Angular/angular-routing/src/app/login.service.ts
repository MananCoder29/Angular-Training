import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { Login } from "./login.model";


@Injectable()
export class LoginService{

    constructor(public http:HttpClient){
   }
    checkLogin():Observable<Login[]>{
        return this.http.get<Login[]>(" http://localhost:3000/login")
     }
}