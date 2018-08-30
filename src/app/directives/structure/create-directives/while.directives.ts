import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**Структурная директива должна применять декоратор Directive,
 * в который передается название селектора директивы в
 * квадратных скобках. В данном случае селектор - "while". */
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[while]'
})
export class WhileDirective {

    /**Для получения доступа к шаблону директивы применяется
     * объект TemplateRef. Этот объект автоматически
     * передается в конструктор через механизм внедрения
     * зависимостей. Кроме этого объекта в конструктор
     * также передается объект рендерера - ViewContainerRef.
     * Ну и с помощью применения модификатора private для
     * обоих этих параметров автоматически будут создаваться
     * локальные переменные, к которым мы затем сможем
     * обратиться. */
    constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    }
    /**С помощью входного свойства-сеттера, к которому
     * применяется декоратор Input, мы будем получать из вне
     * некоторые значения, которые могут использоваться при
     * создании разметки html.
     * В данном случае мы получаем извне некоторое булевое
     * значение: */
    @Input()
    // То есть по факту мы получили аналог директивы ngIf.
    set while (condition: boolean) {
        if (condition) {
            /**Если в данном случае condition равно true,
             * то производим рендеринг шаблона через вызов
             * this.viewContainer.createEmbeddedView
             * (this.templateRef);.
             * В итоге на веб-странице появится элемент,
             * к которому применяется данная директива. */
            this.viewContainer.createEmbeddedView(this.template);
        } else {
            /**В обратном случае, если condition равно false,
             * то, наоборот, удаляем элемент из разметки с
             * помощью вызова this.viewContainer.clear(). */
            this.viewContainer.clear();
        }
    }
}
