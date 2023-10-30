import { Component } from '@angular/core';
import * as ROUTES from './app.routes';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    routes = ROUTES
    title = '100 Angular Challenge';
}
