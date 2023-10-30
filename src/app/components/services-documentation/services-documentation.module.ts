import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesDocumentationComponent } from './services-documentation.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ServicesDocumentationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ServicesDocumentationComponent}])
  ]
})
export class ServicesDocumentationModule { }
