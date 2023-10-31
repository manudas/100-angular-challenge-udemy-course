import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsDocumentationComponent } from './components-documentation.component';
import { StarRatingModule } from '../star-rating/star-rating.module';
import { TopOfPageModule } from '../top-of-page/top-of-page.module';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';
import { CardModule } from '../card/card.module';
import { AccordionModule } from '../accordion/accordion.module';
import { RouterModule } from '@angular/router';
import { LoaderCircularModule } from '../loader-circular-component/loader-circular.module';

@NgModule({
  declarations: [
    ComponentsDocumentationComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
    CardModule,
    LoaderCircularModule,
    ProgressBarModule,
    TopOfPageModule,
    StarRatingModule,
    RouterModule.forChild([{ path: '', component: ComponentsDocumentationComponent}])
  ]
})
export class ComponentsDocumentationModule { }
