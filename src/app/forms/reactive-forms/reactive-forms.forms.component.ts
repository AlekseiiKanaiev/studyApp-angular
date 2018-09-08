import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-reactive-forms-comp',
    templateUrl: './reactive-forms.forms.component.html',
    styleUrls: ['../forms.component.css', '../validation/validation.forms.component.css']
})
export class ReactiveFormsComponent {
    public myForm: FormGroup;
    public myForm1: FormGroup;
    public myForm2: FormGroup;
    public myForm3: FormGroup;

    // FormBuilder передается в качестве сервиса в конструктор.
    constructor(private formBuilder: FormBuilder) {

        /**При подходе Reactive Forms для формы создается
         * набор объектов FormGroup и FormControl.
         * Сама форма и ее подсекции представляют
         * класс FormGroup, а отдельные элементы ввода -
         * класс FormControl.  */
        this.myForm = new FormGroup({
            /**Объект FormControl может иметь различные формы
             * определения.
             * В качестве первого параметра можно передавать
             * значение по умолчанию для элемента,
             * а в качестве второго параметра -
             * набор валидаторов: */
            'userName': new FormControl('Tom', [Validators.required]),
            'userEmail': new FormControl(
                '', [Validators.required,
                    Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]
                ),
            'userPhone': new FormControl()
        });

        this.myForm1 = new FormGroup({
            'userName1': new FormControl('Sam', [Validators.required, this.userNameValidator])
        });

        this.myForm2 = new FormGroup({
            /**Теперь поля для ввода телефонных номеров
             * представлют массив.
             * Массив или FormArray хранит набор объектов
             * FormControl.
             * И в данном случае добавляется один такой
             * объект. */
            'userPhone2': new FormArray([
                new FormControl('+7', Validators.required)
            ])
        });

        /**С помощью метода group() создается
         * объект FormGroup.
         * Каждый элемент передается в форму в виде обычного
         * массива значений: */
        this.myForm3 = formBuilder.group({
            'userName3': ['Tom', [Validators.required]],
            'userEmail3': ['', [ Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]],
            'phones': formBuilder.array([
                ['+7', Validators.required]
            ])
        });
    }
    /**Чтобы можно было динамически при необходимости
     * добавлять новые объекты, в классе компонента
     * предусмотрен метод addPhone() */
    addPhone() {
        /**В этой сложной конструкции мы сначала получаем
         * объект формы через выражение
         * this.myForm.controls["userPhone2"],
         * затем приводим его к типу FormArray.
         * И далее как и в обычный массив добавляем через
         * метод push новый элемент. */
        (<FormArray>this.myForm2.controls['userPhone2']).
            push(new FormControl('+8', Validators.required));
    }

    addPhone3() {
        (<FormArray>this.myForm3.controls['phones']).push(new FormControl('+7', Validators.required));
    }

    submit(): void {
        console.log(this.myForm);
    }

    /**Кроме использования встроенных валидаторов мы также
     * можем определять свои валидаторы.  */
    /**По сути валидатор представляет обычный метод -
     * в данном случае метод userNameValidator.
     * В качестве параметра он принимает элемент формы,
     * к которому этот валидатор применяется, а на выходе
     * возвращает объект, где ключ - строка, а значение
     * равно true. */
    userNameValidator(control: FormControl): {[s: string]: boolean} {
        /**В данном случае проверяем, если значение равно
         * строке "No", то возвращаем объект
         * {"userName": true}.
         * Значение true указывает, что элемент формы
         * не прошел валидацию. */
        if (control.value === 'No') {
            return { 'userName': true };
        }
        /** Если же все нормально, то возвращаем null. */
        return null;
    }
}
