import { Component } from '@angular/core';

// Для работы с данными определен класс User.
export class User {
    name: string;
    email: string;
    phone: string;
}

@Component({
    selector: 'app-validation-forms-comp',
    templateUrl: './validation.forms.component.html',
    styleUrls: ['../forms.component.css']
})
export class ValiadtionFormsComponent {
    user: User = new User();
    addUser() {
        console.log(this.user);
    }
}
