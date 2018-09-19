import { Component } from '@angular/core';

@Component({
    selector: 'app-attributive-directives-comp',
    templateUrl: './attributive.directives.component.html',
    /**В секции styles у компонента определены два класса,
     * которые устанавливают различные стилевые свойства шрифта:
     * verdanaFont и segoePrintFont. */
    styleUrls: ['../directives.component.css', './attributive.directives.component.css']
})
export class AttributiveDirectivesComponent {
    public invisibility = true;

    toggleClass(): void {
        this.invisibility = !this.invisibility;
    }
}
