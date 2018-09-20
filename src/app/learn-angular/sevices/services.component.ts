import { Component, OnInit } from '@angular/core';
// Чтобы задействовать сервис в компоненте, его надо импортировать:
import { DataService } from './services/data.service';
import { LogService } from './services/log.service';
import { Phone } from './phone';

@Component({
    selector: 'app-services-comp',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css'],
    /**сервис необходимо его добавить в коллекцию providers
     * компонента (Все используемые сервисы должны быть
     * определены в коллекции providers.): */
    providers: [DataService, LogService]
})
export class ServicesComponent implements OnInit {
    public items: Phone[] = [];
    public name: string;
    public price: number;

    /**И после этого мы сможем задействовать встроенный
     * в Angular механизм dependency injection и получить
     * объект сервиса в конструкторе компонента и затем
     * использовать по необходимости: */
    constructor(private dataService: DataService) {}

    addItem(name: string, price: number) {
        this.dataService.addData(name, price);
    }
    /**Для загрузки данных реализуется метод ngOnInit()
     * интерфейса OnInit, который вызывается после
     * конструктора. */
    ngOnInit() {
        this.items = this.dataService.getData();
    }
}
