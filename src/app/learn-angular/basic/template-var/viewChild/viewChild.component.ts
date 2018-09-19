import { Component } from '@angular/core';

@Component({
    selector: 'app-viewchild-comp',
    template: `<p>{{ counter }}</p>`
})
export class ViewChildComponent {

    counter = 0;

    increment() {
        this.counter++;
    }
    decrement() {
        this.counter--;
    }
}
