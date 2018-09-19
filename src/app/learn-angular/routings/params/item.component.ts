import { Component, OnInit } from '@angular/core';
/**Для получения параметров маршрута нам необходим
 * специальный сервис ActivatedRoute. */
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-item-routing-comp',
    template: `
        <div>
            <h3>Model {{ id }}</h3>
        </div>
        <div>
            <h3>Model {{ id2 }}</h3>
            <p>Product: {{ product }}</p>
            <p>Price: {{ price }}</p>
        </div>
    `
})
export class ItemComponent implements OnInit {
    private id: number;

    private id2: number;
    /**Для хранения полученных параметров определены
     * свойства product и price. */
    private product: string;
    private price: string;

    private subs: Subscription;

    private routeSubs: Subscription;
    private querySubs: Subscription;
    /**ActivatedRoute содержит информацию о маршруте,
     * параметры маршрута, параметры строки запроса и прочее.
     * Он внедряется в приложение через механизм
     * dependency injection, поэтому мы можем получить его в
     * конструкторе . */
    constructor (private activatedRoute: ActivatedRoute) {
        /**Свойство snapshot хранит состояние маршрута,
         * а состояние маршрута содержит переданные параметры. */
        console.log(activatedRoute);
        /**В данном случае мы предполагаем, что параметр
         * будет называться "id", но это необязательно.
         * Название параметра может быть любым. */
        // Это работает только для получения параметра 1 раз!

        // this.id = activatedRoute.snapshot.params['id'];

        /**Метод subscribe() позволяет установить подписку
         * на изменение параметра маршрута.
         * В этом случае компонент будет получать новое
         * значение, и проблем с навигацией по ссылкам с
         * разными параметрами не возникнет. */
        this.subs = activatedRoute.params.subscribe(
            (params) => this.id = params['id']
        );
    }

    ngOnInit(): void {
        this.routeSubs = this.activatedRoute.params.subscribe(
            (params) => this.id2 = params['id']
        );
        /**Получение параметров из строки запроса аналогично
         * получению данных из маршрута, только в данном
         * случае применяется свойство queryParams класса
         * ActivatedRoute. */
        this.querySubs = this.activatedRoute.queryParams.subscribe(
            (queryParams) => {
                this.product = queryParams['product'];
                this.price = queryParams['price'];
            }
        );
    }
}
