import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-gohome-button-comp',
    template: `
        <div *ngIf="isButton">
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
    private isButton = true;

    constructor(private router: Router, private location: Location) {}

    ngOnInit(): void {
        // Подписываемся на получение текущего нашего адреса
        this.router.events.subscribe(
            () => {
                const url = this.location.path();
                if (url !== '/' &&
                    url !== '' &&
                    url !== '/register' &&
                    url !== '/login') {
                        this.isButton = true;
                } else {
                    this.isButton = false;
                }
                console.log(this.isButton);
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
