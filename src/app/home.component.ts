import { Component } from '@angular/core';


@Component({
    selector: 'app-home',
    template: `
        <h2>Menu</h2>
        <ul class="nav">
            <li routerLinkActive = "active">
                <a routerLink = "/basic">Основы</a>
            </li>
            <li routerLinkActive = "active">
                <a routerLink = "/directives">Директивы</a>
            </li>
            <li routerLinkActive = "active">
                <a routerLink = "/services">Сервисы</a>
            </li>
            <li routerLinkActive = "active">
                <a routerLink = "/forms">Формы</a>
            </li>
            <li routerLinkActive = "active">
                <a routerLink = "/http">HTTP и взаимодействие с сервером</a>
            </li>
            <li routerLinkActive = "active">
                <a routerLink = "/routings">Маршрутизация</a>
            </li>
            <li routerLinkActive = "active">
                <a routerLink = "/test">Tests</a>
            </li>
        </ul>
    `,
    styles: [`
        li {
            padding-right: 10px;
        }
    `]
})
export class HomeComponent {}
