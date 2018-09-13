import { Component } from '@angular/core';
/**Чтобы задействовать директиву NgForm, это импортировать
 * ее из пакета "angular/forms" */
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-ngforms-forms-comp',
    templateUrl: './ngforms.forms.component.html',
    styleUrls: ['../forms.component.css', '../validation/validation.forms.component.css']
})
export class NgFormsComponent {
    /**в методе submit(), который вызывается при нажатии
     * на кнопку, можно получить всю форму и ее значения: */
    submit(form: NgForm) {
        console.log(form);
    }

    onSubmit(form: NgForm) {
        console.log(form);
    }
}
