import { Component, Input } from '@angular/core';
import { CardData } from '../CardData';

@Component({
  selector: 'app-card-front',
  templateUrl: './card-front.component.html',
  styleUrls: ['./card-front.component.scss'],
})
export class CardFrontComponent {
  @Input() cardData: CardData = new CardData();
}
