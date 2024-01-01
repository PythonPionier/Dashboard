import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndustrieproduktionComponent } from './industrieproduktion/industrieproduktion.component';
import { PreiseComponent } from './preise/preise.component';

@NgModule({
  declarations: [
    AppComponent,
    IndustrieproduktionComponent,
    PreiseComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
