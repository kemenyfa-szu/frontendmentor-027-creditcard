import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { numbersOnly, month, isName } from './validators';
import { CardData } from '../CardData';
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {
  @Input() cardData: CardData = new CardData();
  @Output() cardDataChange: EventEmitter<CardData> =
    new EventEmitter<CardData>();
  @Output() success: EventEmitter<boolean> = new EventEmitter<boolean>();

  isSubmitted = false;

  constructor() {}

  ngOnItit(): void {}

  cardForm = new FormGroup({
    holderName: new FormControl('', [Validators.required, isName]),
    cardNumber: new FormControl('', [Validators.required, numbersOnly]),
    expMonth: new FormControl('', [Validators.required, numbersOnly, month]),
    expYear: new FormControl('', [Validators.required, numbersOnly]),
    cvc: new FormControl('', [Validators.required, numbersOnly]),
  });

  submitForm() {
    if (this.cardForm.valid) {
      console.log('aaaaa');
      this.success.emit(true);
    }
  }

  onSubmit(): void {
    this.isSubmitted = true;
  }

  notValid(name: string): boolean | undefined {
    return (
      this.cardForm.get(name)?.invalid &&
      (this.cardForm.get(name)?.touched ||
        this.cardForm.get(name)?.dirty ||
        this.isSubmitted)
    );
  }

  emitChange() {
    this.cardDataChange.emit(
      new CardData(
        this.cardForm.get('holderName')?.value,
        this.cardForm.get('cardNumber')?.value,
        this.cardForm.get('expMonth')?.value,
        this.cardForm.get('expYear')?.value,
        this.cardForm.get('cvc')?.value
      )
    );
  }
}
