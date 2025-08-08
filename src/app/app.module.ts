import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from '@coreui/angular';
import { RouterModule } from '@angular/router';
//import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, CarouselModule, BrowserAnimationsModule,  RouterModule],
  //declarations: [ AppComponent ],
  //bootstrap:    [ AppComponent ]
})
export class AppModule { }