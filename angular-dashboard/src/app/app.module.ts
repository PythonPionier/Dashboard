import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MybarchartComponent } from './mybarchart/mybarchart.component';
import { MyleafletmapComponent } from './myleafletmap/myleafletmap.component';

@NgModule({
  declarations: [
    AppComponent,
    MybarchartComponent,
    MyleafletmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
