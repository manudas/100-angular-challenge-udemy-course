import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate/truncate.pipe';
import { CardPaymentFormaterPipe } from './card/card-payment-formater.pipe';


@NgModule({
  declarations: [TruncatePipe, CardPaymentFormaterPipe],
  imports: [
    CommonModule
  ],
  exports: [TruncatePipe, CardPaymentFormaterPipe]
})
export class PipesModule { }
