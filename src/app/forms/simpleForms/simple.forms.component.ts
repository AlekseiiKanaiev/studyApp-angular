import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
// import { Phone } from '../../sevices/phone';

/**Для представления данных здесь определен класс Phone,
 * в котором есть три свойства. */
export class Phone {
    constructor(public title: string,
                public price: number,
                public company: string) { }
}

@Component({
    selector: 'app-siple-forms-comp',
    templateUrl: './simple.forms.component.html',
    styleUrls: ['../forms.component.css']
})
export class SimpleFormsComponent {
    /**Класс компонента содержит массив объектов Phone. */
    phones: Phone[] = [];
    companies = ['Apple', 'Huawei', 'Xiaomi', 'Samsung', 'LG', 'Motorola', 'Alcatel'];

    /**Для полей ввода здесь создана отдельная переменная
     * phone, к свойствам которой привязаны поля ввода.  */
    phone: Phone = new Phone('', 0, 'Apple');
    phones2: Phone[] = [];

    phone3: Phone = new Phone('', 0, 'Samsung');

    phone4: Phone = new Phone('', 0, 'Samsung');

    /**С помощью метода addPhone() в этот массив добавляется
     * новый объект. */
    addPhone(title: string, price: number, company: string) {
        this.phones.push(new Phone(title, price, company));
    }

    addPhone2() {
        this.phones2.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
    }

    addPhone3(title: NgModel, price: NgModel, comp: NgModel) {
        console.log(title);
        console.log(price);
        console.log(comp);
    }

    onTitleChange() {
        if (this.phone4.title === 'no') {
            this.phone4.title = 'unknown';
        }
    }
}
