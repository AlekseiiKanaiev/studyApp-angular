import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'studyApp';
  private url: string;

  constructor (private router: Router, private location: Location) {
  }

  ngOnInit() {
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
