import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  names:Array<string>=[];

  setNames(name:string){
    this.names.push(name);
    console.log("name added in service "+ name)
  }
  getNames():string[]{
    return this.names;
  }
}
