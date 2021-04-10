import { Component, ViewChild } from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentName?:string;
  childName?:number
  products:Array<string> = [];


  @ViewChild(Child2Component)
   child2?:Child2Component;

   childDesg?:string;
  display(name:any){
    console.log(name);
    this.parentName = name;
  }
  addProduct(product:string){
   this.products.push(product);
  }
  callChild2Fun(){
    this.child2?.child2Fun();
    this.childDesg = this.child2?.desg;
  }
  
}
