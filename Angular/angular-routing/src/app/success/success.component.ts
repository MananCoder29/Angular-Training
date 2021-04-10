import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
   userName?:string
  constructor(public activateRouter:ActivatedRoute ,public route:Router) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(data=>this.userName = data.user);
  }
  logout(){
    sessionStorage.removeItem("obj1");
    this.route.navigate(["login"]);
  }

}
