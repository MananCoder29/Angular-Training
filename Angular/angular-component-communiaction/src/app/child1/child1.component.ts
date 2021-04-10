import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input()                           //
  pname?:string;
  age?:number;

   @Output()                         // eligible to pass value
   eventRef = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  sendAge(age:any){
    this.eventRef.emit(age);       // ready to pass value
    this.age = age       
  }

}
