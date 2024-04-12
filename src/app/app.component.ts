import { Component } from '@angular/core';
import { CardData } from './CardData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontendmentor-027-creditcard';
  cardData: CardData = new CardData();
  success = false;

  successfulSubmit(success: boolean) {
    this.success = success;
  }

  resetForm() {
    this.success = false;
    this.cardData = new CardData();
  }
}
