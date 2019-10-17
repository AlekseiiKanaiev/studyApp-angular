import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-content-child-comp',
    /**Поскольку данные из родительского компонента
        передаются в дочерний напрямую, то для получения
        этих данных в дочернем компоненте будет
        использоваться элемент ng-content */
    template: `
        <ng-content></ng-content>
        <button (click) = 'change()'>Change</button>
    `
})
export class ContentChildComponent {

    /**чтобы получить переменные, которые передаются с кодом
     * через ng-content, дочерний компонент применяет декоратор
     * ContentChild. В этот декоратор также передается название
     * переменной.
     * Само свойство декоратора также представляет объект
     * ElementRef.
     * И далее мы можем манипулировать этим объектом. */
    @ContentChild('headerContent',  {static: false}) /* TODO: add static flag */
    header: ElementRef;

    change() {
        console.log(this.header);
        this.header.nativeElement.textContent = `Hello to all!!!`;
    }
}
