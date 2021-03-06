import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'studyApp';
  private isScroll = false;
  private isJumbotron = false;
  private isButton = false;
  private isCenterContent = false;

  constructor(private router: Router, private location: Location) {}

  // Следим за событием скролл
  @HostListener('window:scroll')
  // В случае скрола выполняем функцию
  onWindowScroll() {
    // Сравниваем текущее положение экрана и полную высоту экрана / 2
    (window.pageYOffset > window.screen.width / 6) ?
      this.isScroll = true :
      this.isScroll = false;
  }

  ngOnInit() {
    // console.log(localStorage);
    // Подписываемся на получение текущего нашего адреса
    this.router.events.subscribe(
      () => {
        const url = this.location.path();
        // console.log(url);
        if (url !== '/register' && url !== '/login') {
          this.isJumbotron = false;
        } else {
          this.isJumbotron = true;
        }
        if (url !== '/' &&
            url !== '' &&
            url !== '/register' &&
            url !== '/login' &&
            !/(\/myApps\/\w+)/.test(url)) {
                this.isButton = true;
        } else {
            this.isButton = false;
        }
        // if (url === '/myApps/calculator') {
        if (/(\/myApps\/\w+)/.test(url)) {
            this.isCenterContent = true;
        } else {
            this.isCenterContent = false;
        }
      }
    );
  }
}
