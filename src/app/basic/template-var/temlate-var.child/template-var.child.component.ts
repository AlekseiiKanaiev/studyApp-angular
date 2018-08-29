import { Component } from '@angular/core';

@Component({
    selector: 'app-template-var-child-comp',
    templateUrl: './template-var.child.component.html'
})
export class TempateVarsChildComponent {
    counter = 0;

    /**В компоненте определяется переменная счетчика counter.
     * Для ее увеличения или уменьшения применяются
     * методы increment и decrement. */
    increment() {
        this.counter++;
    }
    decrement() {
        this.counter--;
    }
}
