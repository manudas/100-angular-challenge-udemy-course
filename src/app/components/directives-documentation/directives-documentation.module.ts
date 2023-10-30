import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesDocumentationComponent } from './directives-documentation.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DirectivesDocumentationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DirectivesDocumentationComponent}])
  ]
})
export class DirectivesDocumentationModule { }
