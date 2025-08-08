import { Component, signal } from '@angular/core';
import { Carousel } from '../../pages/carousel/carousel';  
import { Intro } from '../../pages/intro/intro';
import { Frameworks } from '../../pages/frameworks/frameworks';

@Component({
  selector: 'app-root',
  imports: [Carousel, Intro, Frameworks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('personal-web-dev');
}
