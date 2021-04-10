import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  constructor(public cSer:SharedService) { }

  ngOnInit(): void {
  }
  addNames(name:string){
    this.cSer.setNames(name);
    console.log(name);
  }

}
