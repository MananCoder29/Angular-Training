import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { InterpolationVsPropertyBindingComponent } from './interpolation-vs-property-binding/interpolation-vs-property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    InterpolationVsPropertyBindingComponent,
    EventBindingComponent,
    CalculatorComponent,
    TwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
