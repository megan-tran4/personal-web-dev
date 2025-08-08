import { Component } from '@angular/core';
import { Card } from '../../components/card/card';
 import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-info-carousel',
  imports: [Card, CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {
  slides = [{title: "Kalcom", date: "Dec 2023",description: "This app was designed to demonstrate a streamlined method of the call light system. The call light system is a binary system for medical requests for patients. However, the binary request system prevents nurses from properly prioritizing, as they do not understand how timely the request might be.", link: "Learn More"},
            {title: "GymBudz", date: "June 2023", description: "This app idea connects gym goers together to find their new gym partner, increasing motivation to stay consistent", link: "Learn More"},];
}