import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-assignment-component',
  templateUrl: './assignment-component.component.html',
  styleUrls: ['./assignment-component.component.css']
})
export class AssignmentComponentComponent implements OnInit {
  product:Array<Product> = new Array();
  
  constructor() { }

  ngOnInit(): void {
  }
   add(pid:string,pname:string,price:string){

    let prod =  new Product(pid,pname,price);
    this.product.push(prod);

   }
   remove(){
     this.product.pop();
   }
}
