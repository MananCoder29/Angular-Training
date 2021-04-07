import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee.model'

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {
flag:boolean = true;
value:string="hide";
flag1:boolean = false;
stdName:Array<string> =["Raj","Ramesh","Lokesh","Mahesh","Rajesh"];
emplyees:Array<Employee> = new Array();
  constructor() { 
    let emp1 = new Employee(100,"Ramesh",12000);
    let emp2 = new Employee(101,"Rajesh",15000);
    let emp3 = new Employee(102,"Lokesh",18000);
    let emp4 = new Employee(103,"Mahesh",20000);
    this.emplyees.push(emp1);
    this.emplyees.push(emp2);
    this.emplyees.push(emp3);
    this.emplyees.push(emp4);
  }

  ngOnInit(): void {
  }
  display(){
    if(this.flag==false){
      this.value = "hide";
      this.flag = true;
  }else{
    this.value= "show";
    this.flag = false;
  }   
}
fun(){
  this.flag1 = true;
}

}
