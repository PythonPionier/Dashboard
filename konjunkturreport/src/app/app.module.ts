import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndustrieproduktionComponent } from './industrieproduktion/industrieproduktion.component';
import { PreiseComponent } from './preise/preise.component';
import { BeschaeftigungComponent } from './beschaeftigung/beschaeftigung.component';
import { StimmungComponent } from './stimmung/stimmung.component';

@NgModule({
  declarations: [
    AppComponent,
    IndustrieproduktionComponent,
    PreiseComponent,
    BeschaeftigungComponent,
    StimmungComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
