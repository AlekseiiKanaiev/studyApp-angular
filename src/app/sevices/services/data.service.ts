// Этот файл будет содержать код сервиса.
import { Phone } from '../phone';

import { Injectable } from '@angular/core';
import { LogService } from './log.service';

/**Чтобы указать, что сервис сам может использовать другие
 * сервисы, к классу сервиса применяется декоратор Injectable.
 * Если класс не будет иметь подобного декоратора,
 * то встроенный механизм внедрения зависимостей не сможет
 * создать объект этого класса и выдаст ошибку.
 *
 * Существует общая рекомендации от разработчиков Angular
 * применять Injectable к любому классу сервиса,
 * хотя в принципе это необязательно.
 *
 * Хотя в ранее мы могли использовать сервис в компоненте
 * без применения к компоненту декоратора Injectable.
 * Дело в том, что декоратор Component, который применяется
 * к компоненту, является подтипом Injectable.*/
@Injectable()
export class DataService {
    /**В сервисе определен массив данных и методы для работы
     * с ним.
     * В реальном приложении эти данные можно получать с
     * сервера или из какого-либо внешнего хранилища. */
    private data: Phone[] = [
        { name: 'Apple iPhone 7', price: 56000},
        { name: 'HP Elite x3', price: 56000},
        { name: 'Alcatel Idol S4', price: 25000}
    ];

    constructor(private log: LogService) {}

    getData(): Phone[] {
        this.log.write('get-data operation');
        return this.data;
    }
    addData(name: string, price: number): void {
        this.log.write('add-data operation');
        this.data.push(new Phone(name, price));
    }
}
