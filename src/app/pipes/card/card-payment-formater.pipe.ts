import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cardPaymentFormater'
})
export class CardPaymentFormaterPipe implements PipeTransform {

    allowedCardSizes: number[] = [15, 16]

    transform(value: string): string {
        if (!this.hasCorrectSize(value)) {
            return 'Incorrect card lenght'
        } else if (!this.isOnlyNumbers(value)) {
            return 'Non numeric digits in card detected'
        }

        return this.formatCardNumber(value)
    }

    hasCorrectSize(value: string): boolean {
        return this.allowedCardSizes.includes(value.length)
    }

    isOnlyNumbers(value: string): boolean {
        return /^\d*$/.test(value)
    }

    formatCardNumber(value: string): string {
        return value.match(/.{1,4}/g)?.join('-') ?? ''
    }
}
