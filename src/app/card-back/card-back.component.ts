import { Component, Input } from '@angular/core';
import { CardData } from '../CardData';

@Component({
  selector: 'app-card-back',
  templateUrl: './card-back.component.html',
  styleUrls: ['./card-back.component.scss'],
})
export class CardBackComponent {
  @Input() cardData: CardData = new CardData();
}
