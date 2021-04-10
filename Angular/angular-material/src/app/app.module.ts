import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './button/button.component';
import {MatButtonModule} from '@angular/material/button';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,MatButtonModule,MatInputModule,MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
