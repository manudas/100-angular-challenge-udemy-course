import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AccordionModule } from './components/accordion/accordion.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { CardModule } from './components/card/card.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AccordionModule,
        CardModule,
        ToolbarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
