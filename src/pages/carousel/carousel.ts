import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import {CarouselModule, CarouselComponent, CarouselInnerComponent, CarouselItemComponent,  CarouselControlComponent} from '@coreui/angular';

@Component({
  selector: 'app-info-carousel',
  imports: [CarouselModule, CarouselComponent, CarouselInnerComponent, CarouselItemComponent,  CarouselControlComponent, RouterLink],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {
  slides = ['1', '2', '3', '4', '5'];
}