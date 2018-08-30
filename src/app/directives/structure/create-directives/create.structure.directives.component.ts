import { Component } from '@angular/core';

@Component({
    selector: 'app-create-structure-directives-comp',
    templateUrl: './create.structure.directives.component.html'
})
export class CreateStructureDirectivesComponent {
    public condition = true;

    toggle() {
        this.condition = !this.condition;
    }
}
