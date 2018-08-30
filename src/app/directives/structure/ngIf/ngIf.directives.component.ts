import { Component } from '@angular/core';

@Component({
    selector: 'app-ngif-directives-comp',
    templateUrl: './ngIf.directives.component.html'
})
export class NgIfDirectivesComponent {
    public condition = true;
    public condition2 = true;
    public condition3 = true;

    toggle() {
        this.condition = !this.condition;
    }
    toggle2() {
        this.condition2 = !this.condition2;
    }
    toggle3() {
        this.condition3 = !this.condition3;
    }
}
