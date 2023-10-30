import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsDocumentationComponent } from './components-documentation.component';
import { StarRatingModule } from '../star-rating/star-rating.module';
import { TopOfPageModule } from '../top-of-page/top-of-page.module';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';
import { CardModule } from '../card/card.module';
import { AccordionModule } from '../accordion/accordion.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ComponentsDocumentationComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
    CardModule,
    ProgressBarModule,
    TopOfPageModule,
    StarRatingModule,
    RouterModule.forChild([{ path: '', component: ComponentsDocumentationComponent}])
  ]
})
export class ComponentsDocumentationModule { }
