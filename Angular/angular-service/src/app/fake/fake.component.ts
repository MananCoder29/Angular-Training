import { Component, OnInit } from '@angular/core';
import { Fake } from '../model.fake';
import { FakeService } from '../service.fake';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {
  msg?:string;
  f1?:boolean;
  fakeData?:Array<Fake>;
  constructor(public fakeSer:FakeService) { }            //pull object from container

  ngOnInit(): void {
  }
 fun1(){
   this.msg = this.fakeSer.sayHello();
 }
 callFake(){
   this.fakeSer.callFakeService();
 }
 loadInTable(){
   this.f1=true;
  this.fakeSer.dispalyFakeInTableFormat().subscribe(data=>this.fakeData=data);
 }
}
