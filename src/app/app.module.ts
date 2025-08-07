import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from '@coreui/angular';
//import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, CarouselModule, BrowserAnimationsModule ],
  //declarations: [ AppComponent ],
  //bootstrap:    [ AppComponent ]
})
export class AppModule { }