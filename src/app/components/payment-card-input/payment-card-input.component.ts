import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-payment-card-input',
    templateUrl: './payment-card-input.component.html',
    styleUrls: ['./payment-card-input.component.scss']
})
export class PaymentCardInputComponent {
    @Input() readonly: boolean = false;
    @Input() number: string = ''
}
