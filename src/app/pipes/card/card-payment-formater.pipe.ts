import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cardPaymentFormater'
})
export class CardPaymentFormaterPipe implements PipeTransform {

    allowedCardSizes: number[] = [15, 16]

    transform(value: string, xOutCardNumber = false): string {
        if (!this.hasCorrectSize(value)) {
            return 'Incorrect card lenght'
        } else if (!this.isOnlyNumbers(value)) {
            return 'Non numeric digits in card detected'
        }
        let _value
        if (xOutCardNumber) {
            _value = this.xOutCardNumber(value)
        } else {
            _value = value
        }

        return this.formatCardNumber(_value)
    }

    hasCorrectSize(value: string): boolean {
        return this.allowedCardSizes.includes(value.length)
    }

    isOnlyNumbers(value: string): boolean {
        return /^\d*$/.test(value)
    }

    xOutCardNumber(value: string): string {
        const separatedGroups = value.match(/.{1,4}/g)
        return Array((separatedGroups?.length ?? 0 - 1)*4).fill('x').concat(separatedGroups?.[separatedGroups.length - 1]).join('')
    }

    formatCardNumber(value: string): string {
        return value.match(/.{1,4}/g)?.join('-') ?? ''
    }
}
