import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FakeComponent } from './fake/fake.component';
import { FakeService } from './service.fake';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './service.employee';
import { FormsModule } from '@angular/forms';
import { GenderPipe } from './gender.pipe';
import {DesignationPipe} from './designation.pipe'

@NgModule({
  declarations: [
    AppComponent,
    FakeComponent,
    EmployeeComponent,GenderPipe,DesignationPipe
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [FakeService,EmployeeService],     //Register all service class details
  bootstrap: [AppComponent]
})
export class AppModule { }
