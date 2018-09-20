import { Component } from '@angular/core';

@Component({
    selector: 'app-ngfor-directives-comp',
    templateUrl: './ngFor.directives.component.html'
})
export class NgForDirectivesComponent {
    public items = ['Apple iPhone 7', 'Huawei Mate 9', 'Samsung Galaxy S7', 'Motorola Moto Z'];
    public count = 5;
}
