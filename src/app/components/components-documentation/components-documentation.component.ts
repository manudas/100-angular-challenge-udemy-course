import { Component } from '@angular/core';
import { AccordionInterface } from '../accordion/accordion.interface';

@Component({
    selector: 'app-components-documentation',
    templateUrl: './components-documentation.component.html',
    styleUrls: ['./components-documentation.component.scss']
})
export class ComponentsDocumentationComponent {
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
