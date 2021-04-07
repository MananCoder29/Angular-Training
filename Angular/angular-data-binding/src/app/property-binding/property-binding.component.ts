import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
   name:string="Ajay kumar";
   age:number=23;
  constructor() { }

  ngOnInit(): void {
  }
  sayHello():string{
    return "Welcome to one way data binding property binding";
  }

}
