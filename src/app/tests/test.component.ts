import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-test',
    templateUrl: 'test.component.html',
    styleUrls: ['test.component.css']
})
export class MainTestComponent {
    constructor(private router: Router) {}

    goHome(): void {
        this.router.navigate(['']);
    }
}
