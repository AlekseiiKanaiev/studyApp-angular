import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Httpservice } from '../http.service';

@Component({
    selector: 'app-send-request-http-comp',
    templateUrl: './send-req.http.component.html',
    styleUrls: ['../http.component.css']
})
export class SendRequestComponent implements OnInit {
    public user: User;
    public user2: User;
    public users: User[];

    constructor(private http: HttpClient, private httpService: Httpservice) {}

    // в методе ngOnInit() получаем данные из сервиса.
    ngOnInit(): void {
        /**Сам метод http.get() возвращает объект
         * Observable<any>.
         * Observable представляет своего рода поток, и для
         * прослушивания событий из этого потока применяется
         * метод subscribe. */
        this.http.get('user.json').subscribe(
            /**Этот метод определяет действие над
             * результатом запроса - полученными с сервера
             * данными.
             * В данном случае действие определено в виде
             * стрелочной функции. Причем поскольку между
             * схемой класса User и данными из файла json
             * есть прямое сопоставление, то получаемые
             * данные мы можем определить как объект User,
             * и присвоить их переменной данного класса */
            (data: User) => this.user = data
        );

        // используем Httpservice сервис в компоненте
        this.httpService.getData().subscribe(
            (data: User) => this.user2 = data
        );

        this.httpService.getMoreData().subscribe(
            (data: User[]) => this.users = data['userList']
        );
    }
}
