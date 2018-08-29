/**После создания компонента фреймворк Angular вызывает у этого
 * компонента ряд методов, которые представляют различные этапы
 * жизненного цикла:
 *
1. ngOnChanges: вызывается до метода ngOnInit() при начальной
установке свойств, которые связаны механизмом привязки, а также
при любой их переустановке или изменении их значений.
Данный метод в качестве параметра принимает объект класса
SimpleChanges, который содержит предыдущие и текущие значения
свойства.

2. ngOnInit: вызывается один раз после установки свойств
компонента, которые участвуют в привязке.
Выполняет инициализацию компонента

3. ngDoCheck: вызывается при каждой проверке изменений свойств
компонента сразу после методов ngOnChanges и ngOnInit

4. ngAfterContentInit: вызывается один раз после метода
ngDoCheck() после вставки содержимого в представление
компонента кода html

5. ngAfterContentChecked: вызывается фреймворком Angular при
проверке изменений содержимого, которое добавляется в
представление компонента.
Вызывается после метода ngAfterContentInit() и и после
каждого последующего вызова метода ngDoCheck().

6. ngAfterViewInit: вызывается фреймворком Angular после
инициализации представления компонента, а также представлений
дочерних компонентов. Вызывается только один раз сразу после
первого вызова метода ngAfterContentChecked()

7. ngAfterViewChecked: вызывается фреймворком Angular после
проверки на изменения в представлении компонента, а также
проверки представлений дочерних компонентов.
Вызывается после первого вызова метода ngAfterViewInit() и
после каждого последующего вызова ngAfterContentChecked()

8. ngOnDestroy: вызывается перед тем, как фреймворк Angular удалит
компонент.*/
/**Каждый такой метод определен в отдельном интерфейсе, который
 * называется по имени метода без префикса "ng".
 * Например, метод ngOnInit определен в интерфейсе OnInit.
 * Поэтому, если мы хотим отслеживать какие-то этапы жизненного цикла
 * компонента, то класс компонента должен применять соответствующие
 * интерфейсы: */

import { Component,
        OnInit,
        DoCheck,
        OnChanges,
        AfterContentInit,
        AfterContentChecked,
        AfterViewChecked,
        AfterViewInit,
        SimpleChanges,
        OnDestroy,
        Input} from '@angular/core';

@Component({
    selector: 'app-lifecycle-comp',
    templateUrl: 'lifecycle.component.html',
    styleUrls: ['../basic-main.component.css']
})
export class LifeCycleComponent
implements OnInit,
            DoCheck,
            OnChanges,
            AfterContentInit,
            AfterContentChecked,
            AfterViewChecked,
            AfterViewInit,
            OnDestroy {

    @Input() lcName: string;
    count = 1;
    name = 'Bob';

    constructor() {
        this.log(`constructor`);
    }

    ngOnInit() {
        /**Метод ngOnInit() применяется для какой-то
         * комплексной инициализации компонента.
         * Здесь можно выполнять загрузку данных с сервера или
         * из других источников данных.
         * ngOnInit() не аналогичен конструктору.
         * Конструктор также может выполнять некоторую
         * инициализацию объекта, в то же время что-то сложное
         * в конструкторе делать не рекомендуется.
         * Конструктор должен	быть по возможности простым и
         * выполнять самую базовую инициализацию.
         * Что-то более сложное, например, загрузку данных
         * с сервера, которая может занять продолжительное
         * время, лучше делать в методе ngOnInit. */
            this.log(`ngOnInit`);
    }
    ngOnChanges(changes: SimpleChanges) {
        this.log(`ngOnChanges`);
        // tslint:disable-next-line:forin
        for (const propName in changes) {
            const chng = changes[propName];
            const cur = JSON.stringify(chng.currentValue);
            const prev = JSON.stringify(chng.previousValue);
            this.logChanges(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }
    ngDoCheck() {
            this.log(`ngDoCheck`);
    }
    ngAfterViewInit() {
            this.log(`ngAfterViewInit`);
    }
    ngAfterViewChecked() {
            this.log(`ngAfterViewChecked`);
    }
    ngAfterContentInit() {
            this.log(`ngAfterContentInit`);
    }
    ngAfterContentChecked() {
            this.log(`ngAfterContentChecked`);
    }

    ngOnDestroy(): void {
        /**в этом методе можно освобождать те используемые
         * ресурсы, которые не удаляются автоматически
         * сборщиком мусора.
         * Здесь также можно удалять подписку на какие-то
         * события элементов DOM, останавливать таймеры и т.д. */
    }

    private log(msg: string) {
            console.log(`${this.count}. ${msg}`);
            this.count++;
    }
    private logChanges(msg: string) {
            console.log(msg);
    }
}

