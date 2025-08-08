import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() title: string = "Project Title";
  @Input() date: string = "Date";
  @Input() description: string = "This is a brief description of the project.";    
  @Input() link: string = "Learn More";
}
