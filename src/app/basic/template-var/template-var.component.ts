import { Component, ViewChild } from '@angular/core';
import { ViewChildComponent } from './viewChild/viewChild.component';

@Component({
    selector: 'app-template-var-comp',
    templateUrl: './template-var.component.html',
    styleUrls: ['../basic-main.component.css']
})
export class TemplateVariablesComponent {
    name = 'Tom';

    @ViewChild(ViewChildComponent)
    private counterComponent: ViewChildComponent;

    increment() {
        this.counterComponent.increment();
    }
    decrement() {
        this.counterComponent.decrement();
    }

}
