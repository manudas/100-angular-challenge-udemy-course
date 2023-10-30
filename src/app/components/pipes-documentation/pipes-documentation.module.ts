import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDocumentationComponent } from './pipes-documentation.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PipesDocumentationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PipesDocumentationComponent}])
  ]
})
export class PipesDocumentationModule { }
