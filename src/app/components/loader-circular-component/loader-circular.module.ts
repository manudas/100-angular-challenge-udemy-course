import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderCircularComponent } from './loader-circular.component';



@NgModule({
  declarations: [
    LoaderCircularComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LoaderCircularComponent]
})
export class LoaderCircularModule { }
