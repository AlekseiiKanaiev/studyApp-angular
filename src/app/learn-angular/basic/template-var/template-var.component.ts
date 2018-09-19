import { Component, ViewChild, ElementRef } from '@angular/core';
import { ViewChildComponent } from './viewChild/viewChild.component';

@Component({
    selector: 'app-template-var-comp',
    templateUrl: './template-var.component.html',
    styleUrls: ['../basic-main.component.css']
})
export class TemplateVariablesComponent {
    name = 'Tom';

    /**С помощью применения к нему декоратора ViewChild к
     * свойству counterComponent мы устанавливаем, что это
     * свойство будет содержать объект дочернего компонента,
     * который внедряется через элемент
     * <app-viewchild-comp></app-viewchild-comp>.
     * И в этом случае мы уже можем не использовать шаблонные
     * переменные в шаблоне. */
    @ViewChild(ViewChildComponent)
    private counterComponent: ViewChildComponent;

    /**Несмотря на то, что выше мы не использовали переменные,
     * тем не менее с помощью декоратора ViewChild также можно
     * связать свойство и переменную из шаблона. */

    /**B шаблоне определяется переменная nameText,
     * которая представляет код параграфа.
     * А в декоратор ViewChild передается имя этой переменной.
     * Поэтому свойство nameParagraph, к которому применяется
     * декоратор, будет указывать на эту переменную nameText.
     * Причем свойство nameParagraph представляет тип
     * ElementRef, который используется для ссылки на
     * элементы html. */
    @ViewChild('textName')
    nameParagraph: ElementRef;
    /**По нажатию на кнопку выводится и изменяется текстовое
     * содержимое этой переменной. */
    change() {
        console.log(this.nameParagraph.nativeElement.textContent);
        this.nameParagraph.nativeElement.textContent = `Mr. ${this.name}`;
    }

    increment() {
        this.counterComponent.increment();
    }
    decrement() {
        this.counterComponent.decrement();
    }

}
