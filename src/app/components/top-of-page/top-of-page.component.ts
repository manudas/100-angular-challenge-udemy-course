import { ViewportScroller } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
    selector: 'app-top-of-page',
    templateUrl: './top-of-page.component.html',
    styleUrls: ['./top-of-page.component.scss']
})
export class TopOfPageComponent {

    @Input() appearsOnScroll: number = 400
    isShown: boolean = false
    constructor(private viewPortScroller: ViewportScroller) { }

    @HostListener('document:scroll')
    onScrollHandler() {
        this.isShown = this.viewPortScroller.getScrollPosition()[1] > this.appearsOnScroll
    }

    scrollToTop() {
        this.viewPortScroller.scrollToPosition([0, 0])
    }
}
