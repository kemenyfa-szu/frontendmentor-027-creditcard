export class CardData {
  name?: string | null = '';
  cardNumber?: string | null = '';
  expMonth?: string | null = '';
  expYear?: string | null = '';
  cvc?: string | null = '';

  constructor(
    name: string | null = '',
    cardNumber: string | null = '',
    expMonth: string | null = '',
    expYear: string | null = '',
    cvc: string | null = ''
  ) {
    this.name = name ? name : 'Jane Appleseed';
    this.cardNumber = cardNumber ? cardNumber : '0000 0000 0000 0000';
    this.expMonth = expMonth ? expMonth : '00';
    this.expYear = expYear ? expYear : '00';
    this.cvc = cvc ? cvc : '000';
  }
}
