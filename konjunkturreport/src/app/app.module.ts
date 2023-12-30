import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndustrieproduktionComponent } from './industrieproduktion/industrieproduktion.component';
import { TsplotComponent } from './tsplot/tsplot.component';

@NgModule({
  declarations: [
    AppComponent,
    IndustrieproduktionComponent,
    TsplotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
