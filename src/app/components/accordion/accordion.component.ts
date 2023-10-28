import { Component, Input } from '@angular/core';
import { AccordionInterface } from './accordion.interface';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
    @Input() public items: AccordionInterface[] = []
    isOpen: boolean = false;

    toggle(index: number) {
        this.items[index].expanded = !this.items[index].expanded
    }
}
