import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
    @Input() value: number = 0;
    @Input() max: number = 5;

    get fullStarRating() {
        return Math.floor(this.value)
    }

    get hasHalfStarRating() {
        return (this.value - this.fullStarRating) >= 0.5
    }

    get fullEmptyStarRating() {
        return Math.floor(this.max - this.value)
    }

    get fullStarRatingArr() {
        return Array(this.fullStarRating)
    }

    get fullEmptyStarRatingArr() {
        return Array(this.fullEmptyStarRating)
    }
}
