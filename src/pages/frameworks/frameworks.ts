import { Component } from '@angular/core';

@Component({
  selector: 'app-frameworks',
  imports: [],
  templateUrl: './frameworks.html',
  styleUrl: './frameworks.css'
})
export class Frameworks {
  title = "Frameworks Used";
  date = "2024";
  list: string[] = ['AngularJS', "TypeScript", "HTML", "CSS"];
  link = "Learn More";

}
