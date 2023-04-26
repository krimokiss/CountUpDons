import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountUp } from 'countup.js';


import { AppComponent } from './app.component';
import { DonsComponent } from './dons/dons.component';

@NgModule({
  declarations: [
    AppComponent,
    DonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
