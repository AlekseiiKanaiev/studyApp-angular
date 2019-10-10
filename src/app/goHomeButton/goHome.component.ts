import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-gohome-button-comp',
    template: `
            <button class="goHome" (click) = "goHome()">To Main Page</button>
    `,
    styles: [`
        .goHome{
            margin-bottom: 20px;
        }
    `]
})
export class GoHomeButtonComponent implements OnInit {
    private isButton = true;

    constructor(private router: Router) {}

    ngOnInit(): void {
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
