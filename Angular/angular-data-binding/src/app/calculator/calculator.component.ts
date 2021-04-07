import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
   result:string=""
  constructor() { }

  ngOnInit(): void {
  }
  add(n1:string,n2:string){
    this.result = (eval(n1)+eval(n2));

  }
  sub(n1:string,n2:string){
    this.result = (eval(n1)-eval(n2)).toString();

  }

}
