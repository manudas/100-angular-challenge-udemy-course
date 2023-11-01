import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentCardInputComponent } from './payment-card-input.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    PaymentCardInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
  ],
  exports: [PaymentCardInputComponent]
})
export class PaymentCardInputModule { }
