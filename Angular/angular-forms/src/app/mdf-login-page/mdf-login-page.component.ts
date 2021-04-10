import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service.login';

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {
  loginRef = new FormGroup({
    user: new FormControl("",Validators.required),
    pass: new FormControl("",Validators.required)
  })
  msg?:string;

  constructor() { }

  ngOnInit(): void {
  }
  checkUser(){
    console.log("event fired");
    console.log(this.loginRef.value);
    let user = this.loginRef.get("user")?.value;
    let pass = this.loginRef.get("pass")?.value;
    let ls = new LoginService();
    this.msg = ls.checkUser(user,pass);
    console.log("User is: "+user);
    console.log("password is: "+pass);
  }

}
