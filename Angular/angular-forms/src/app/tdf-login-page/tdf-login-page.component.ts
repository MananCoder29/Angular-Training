import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service.login';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {
  //result?:string;
  msg?:string;
  fname?:string;
  lname?:string;
  gender?:string;
  hobbies?:string;
  cricket?:string;
  swimming?:string;
  sleeping?:string;
  city?:string;
  skillset?:string;


  constructor() { }

  ngOnInit(): void {
  }
  checkUser(login:any){
    //console.log("event generated");
     console.log(login);
    // if(login.user =="manan" && login.pass == "1234"){
    //   this.result = login.user +" you have successfully logged in!";
    // }else{
    //   this.result ="Log in Failed! Try using correct username and password!"
    // }
    let ls = new LoginService();
    this.msg = ls.checkUser(login.user,login.pass);
    this.fname = login.fname;
    this.lname =login.lname;
    this.gender = login.gender;
    
    if(login.hobby1 && login.hobby2 && login.hobby3){
      this.hobbies = "Cricket, Swimming and Sleeping";
      //this.hobbies = this.cricket+ this.swimming  
    }else if(login.hobby1 && login.hobby2){
      this.hobbies = "Cricket and Swimming";
    }else if(login.hobby1 && login.hobby3){
      this.hobbies ="Cricket and Sleeping";
    
    }else if(login.hobby2 && login.hobby3){
      this.hobbies ="Swimming and Sleeping";
    }
    else if(login.hobby1){
      this.hobbies ="Cricket";
    }else if(login.hobby2){
     this.hobbies ="Swimming";
    }else if(login.hobby3){
     this.hobbies ="Sleeping";
    }

    this.city = login.city;
    this.skillset = login.skillset;
  }
}
