import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  id:number= 1000;
  name:string = "manan";
  salary:number = 120000;

  constructor() { }

  ngOnInit(): void {
  }
  sayHello():string{
    return "Welcome to string interpolation one way data binding";
  }

}
