import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthGaurd implements CanActivate{
    canActivate(){
    if(sessionStorage.getItem("obj1")){
        return true;
    }else {
        return false;
    }
    
    }
}