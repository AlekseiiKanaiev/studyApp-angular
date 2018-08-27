import { Component } from '@angular/core';

@Component({
    selector: 'app-bindings-comp',
    templateUrl: './bindings.component.html',
    styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {
    name = 'Alex';
    count = 0;

    increase(): void {
        this.count++;
        console.log(`clicks ${this.count}`);
    }

}
