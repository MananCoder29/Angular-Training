import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg?:string;

  constructor(public router:Router, public login:LoginService) { }

  ngOnInit(): void {
  }
  checkUser(loginRef:any){
    console.log(loginRef);
    let user = loginRef.user;
    let pass = loginRef.pass;
    this.login.checkLogin().subscribe(data=> {
      data.forEach(rec=>{
        if(rec.user==user && rec.pass==pass){
          sessionStorage.setItem("obj1",rec.user);
          this.router.navigate(["success",rec.user]);
        }else {
          this.errorMsg="Invalid UserName or password"; 
        }
      })
  })

    // if(user=="manan" && pass=="1234"){
    //   console.log("successfully logged in!");
    //   this.router.navigate(["success"]);
    // }else{
    //   console.log("Failure try again!!");
    //   this.errorMsg="Invalid username or password";
    // }
  }
}
