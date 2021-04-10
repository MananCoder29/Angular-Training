import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {

  child3Names?:Array<string>;

  constructor(public cSer:SharedService) { }

  ngOnInit(): void {
  }
  loadNames(){
    this.child3Names = this.cSer.getNames();
  }


}
