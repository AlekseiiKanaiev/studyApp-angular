import { Component } from '@angular/core';
import { Item } from './item';
import { Router } from '@angular/router';

@Component({
    selector: 'app-params-comp',
    templateUrl: './params.component.html',
    styleUrls: ['../routing.component.css']
})
export class ParamsComponent {
    private item: Item = new Item();

    constructor(private router: Router) {}

    goToItem(item: Item): void {
        /**Для передачи компоненту ItemComponent нужных
         * параметров в метод navigate() первого параметра
         * передается набор значений */
        this.router.navigate(
            /**первое из которых - собственно путь, а все
             * последующие - значения для параметров маршрута */
            ['routings/params/item', item.id],
            {
                /**Второй параметр представляет объект
                 * javascript, который содержит все нужные
                 * значения для параметров строки запроса */
                queryParams: {
                    'product': item.product,
                    'price': item.price
                }
            }
        );
    }

}
