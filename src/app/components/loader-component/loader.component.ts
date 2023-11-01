import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core'
import LOADER_TYPE from './loaderType.enum'
import { BehaviorSubject } from 'rxjs'

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
    static interval: number = 500
    loaderType = LOADER_TYPE
    @Input() type: LOADER_TYPE = LOADER_TYPE.CIRCULAR
    @Input() isOpen: boolean = false
    @Output() loaderChanged: EventEmitter<boolean> = new EventEmitter<boolean>()

    loadingNumber$: BehaviorSubject<number> = new BehaviorSubject<number>(0)
    intervalID: ReturnType<typeof setInterval> | null = null

    toggle() {
        this.isOpen = !this.isOpen
        this.loaderChanged.emit(this.isOpen)
    }

    ngOnInit() {
        if (this.type === LOADER_TYPE.LOADING) {
            this.intervalID = setInterval(() => {
                const currentValue = this.loadingNumber$.getValue() + 1
                this.loadingNumber$.next(currentValue % 3)
            }, LoaderComponent.interval)
        }
    }

    ngOnDestroy(): void {
        if (this.intervalID) clearInterval(this.intervalID)
    }

    public get loadingText(): string {
        return `Loading${Array(this.loadingNumber$.getValue() + 1).fill('.').concat(Array((3 - 1) - this.loadingNumber$.getValue()).fill('\0')).join('')}`
    }
}
