import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDocumentationComponent } from './pipes-documentation.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CardModule } from '../card/card.module';



@NgModule({
  declarations: [
    PipesDocumentationComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: PipesDocumentationComponent}])
  ]
})
export class PipesDocumentationModule { }
