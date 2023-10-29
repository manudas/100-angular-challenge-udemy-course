import { Component } from '@angular/core';
import { AccordionInterface } from './components/accordion/accordion.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = '100 Angular Challenge';
    accordionItems: AccordionInterface[] = [
        {
            title: 'This is my 1st accordion title',
            content: 'This is my 1st accordion content',
            expanded: false
        },
        {
            title: 'This is my 2nd accordion title',
            content: 'This is my 2nd accordion content',
            expanded: false
        }
    ]
    progressBarValue = 25
    progressBarMax = 100
}
