import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCardInputComponent } from './payment-card-input.component';

describe('PaymentCardInputComponent', () => {
  let component: PaymentCardInputComponent;
  let fixture: ComponentFixture<PaymentCardInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentCardInputComponent]
    });
    fixture = TestBed.createComponent(PaymentCardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
