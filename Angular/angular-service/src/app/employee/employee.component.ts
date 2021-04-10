import { Component, OnInit } from '@angular/core';
import { Employee } from '../model.employee';
import { EmployeeService } from '../service.employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  dd = new Date();
  flag?:boolean;
  employeeData?:Array<Employee>
  stylevalue = {"color":"white","background-color":"red","text-align":"center"};

  constructor(public emp:EmployeeService) { }

  ngOnInit(): void {
   //this.emp.dispalyFakeInTableFormat().subscribe(data=>this.employeeData=data);
   this.loadInTableFormat();
  }
  loadInTableFormat(){
    this.flag=true;
    this.emp.dispalyFakeInTableFormat().subscribe(data=>this.employeeData=data);
  }
  storeRecord(emp){
    console.log(emp);
    this.emp.storeEmployee(emp);
    //this.emp.dispalyFakeInTableFormat().subscribe(data=>this.employeeData=data);
    this.loadInTableFormat()
    
  }

}
