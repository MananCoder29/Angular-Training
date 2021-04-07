import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentDirectiveComponent } from './component-directive/component-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { AssignmentComponentComponent } from './assignment-component/assignment-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDirectiveComponent,
    StructuralDirectiveComponent,
    AttributeDirectiveComponent,
    AssignmentComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
