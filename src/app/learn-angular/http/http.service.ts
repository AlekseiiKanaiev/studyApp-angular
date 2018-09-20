import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// чтобы использовать элементы библиотеки RxJS, их надо импортировать
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../forms/validation/validation.forms.component';

/**Для отправки запросов сервис получает объект HttpClient.
 * Поскольку сервис принимает в конструкторе параметр через
 * механизм dependency injection, то к классу применяется
 * декоратор @Injectable. */
@Injectable()
export class Httpservice {
    constructor(private http: HttpClient) {}

    public getData() {
        /**Для выполнения get-запроса у объекта HttpClient
         * вызывается метод get(), в который передается
         * адрес запроса - в нашем случае json-файл с данными. */
        return this.http.get('user.json');
    }

    public getMoreData() {
        return this.http.get('users.json');
    }

    /**Смысл использования специального сервиса для работы
     * с http заключается в сокрытии деталей отправки
     * запросов.
     * Компонент же ожидает получить какие-то конкретные
     * данные, например, в виде набора объектов User.
     * С помощью метода "map" библиотеки rxjs можно
     * преобразовать данные из одного формата в другой. */
    /**В итоге весь метод getUsers() возвращает объект
     * Observable<User[]>. */
    public getUsers(): Observable<User[]> {
        /**У результата метода get() мы можем вызвать метод
         * pipe(), который позволяет обработать результаты
         * запроса. */
        return this.http.get('users2.json').pipe(
            /**Для этого метод pipe в качестве первого
             * параметра принимает функцию обработки данных
             * запроса.
             * В данном случае в роли такой функции выступает
             * оператор map, который преобразует результаты
             * запроса в новые объекты.  */
            map(
                data => {
                    const userList = data['userList'];
                    return userList.map(user => {
                        return {name: user.userName, age: user.userAge};
                    });
                }
            )
        );
    }
}
