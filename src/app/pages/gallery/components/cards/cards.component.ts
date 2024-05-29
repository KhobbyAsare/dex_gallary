import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  cards = [1, 2, 3, 4, 5, 5, 45, 45, 454, 45, 2, 3, 4, 5, 5, 45, 45, 454, 45];
  // isTallCard(index: number) {
  //   return (index + 1) % 5 === 0;
  // }
}
