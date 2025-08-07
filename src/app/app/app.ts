import { Component, signal } from '@angular/core';
import { Carousel } from '../../pages/carousel/carousel';  

@Component({
  selector: 'app-root',
  imports: [Carousel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('personal-web-dev');
}
