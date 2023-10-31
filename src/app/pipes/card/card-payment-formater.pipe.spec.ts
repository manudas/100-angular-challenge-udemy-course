import { CardPaymentFormaterPipe } from './card-payment-formater.pipe';

describe('CardPaymentFormaterPipe', () => {
  it('create an instance', () => {
    const pipe = new CardPaymentFormaterPipe();
    expect(pipe).toBeTruthy();
  });
});
