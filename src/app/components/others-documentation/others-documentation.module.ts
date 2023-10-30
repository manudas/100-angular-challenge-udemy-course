import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OthersDocumentationComponent } from './others-documentation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OthersDocumentationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: OthersDocumentationComponent}])
  ]
})
export class OthersDocumentationModule { }
