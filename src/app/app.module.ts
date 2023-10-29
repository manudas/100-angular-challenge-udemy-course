import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AccordionModule } from './components/accordion/accordion.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { CardModule } from './components/card/card.module';
import { AppComponent } from './app.component';
import { ProgressBarModule } from './components/progress-bar/progress-bar.module';
import { StarRatingModule } from './components/star-rating/star-rating.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AccordionModule,
        CardModule,
        ProgressBarModule,
        ToolbarModule,
        StarRatingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
