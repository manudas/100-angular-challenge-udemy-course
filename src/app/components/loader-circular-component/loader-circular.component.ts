import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-loader-circular',
    templateUrl: './loader-circular.component.html',
    styleUrls: ['./loader-circular.component.scss']
})
export class LoaderCircularComponent {
    @Input() isOpen: boolean = false
    @Output() loaderChanged: EventEmitter<boolean> = new EventEmitter<boolean>()

    toggle() {
        this.isOpen = !this.isOpen
        this.loaderChanged.emit(this.isOpen)
    }
}
