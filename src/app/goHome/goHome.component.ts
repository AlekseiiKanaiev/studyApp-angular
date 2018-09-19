import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-gohome-button-comp',
    template: `
        <div *ngIf="url !== '/' && url !== ''">
            <hr>
            <button class="goHome" (click) = "goHome()">To Main Page</button>
        </div>
    `,
    styles: [`
        .goHome{
            margin-bottom: 20px;
        }
    `]
})
export class GoHomeComponent implements OnInit {
    private url: string;

    constructor(private router: Router, private location: Location) {}

    ngOnInit(): void {
        // Подписываемся на получение текущего нашего адреса
        this.router.events.subscribe(
            () => {
            this.url = this.location.path();
            }
        );
    }
    /**Через конструктор получаем объект Router и в
     * обработчике кнопки вызываем его метод navigate().
     * В этот метод передается путь перехода.
     * Если мы переходим на главную страницу, то передается
     * пустая строка. */
    goHome(): void {
        this.router.navigate(['']);
    }
}
