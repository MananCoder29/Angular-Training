import { Component } from "@angular/core";

@Component({
    selector:"footer-app",
    template:`
    <div>
    <h2>
    This is footer info {{msg}}
    </h2>
    </div>
    `,
    styles:["h2{color:blue;}"]
})
export class FooterComponent{
   msg:string = "Footer details";
}