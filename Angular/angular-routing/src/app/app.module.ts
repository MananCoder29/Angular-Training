import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGaurd } from './login.auth';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [LoginService,AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
