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

  constructor(private router: Router, private location: Location) {}

  // Следим за событием скролл
  @HostListener('window:scroll')
  // В случае скрола выполняем функцию
  onWindowScroll() {
    // Сравниваем текущее положение экрана и полную высоту экрана / 2
    (window.pageYOffset > window.screen.width / 2) ?
      this.isScroll = true :
      this.isScroll = false;
  }

  ngOnInit() {
    // console.log(localStorage);
    console.log();
    this.router.events.subscribe(
      () => {
        const url = this.location.path();
        if (url === '/register' || url === '/login') {
          this.isJumbotron = true;
        } else {
          this.isJumbotron = false;
        }
      }
    );
  }
}
