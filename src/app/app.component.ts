import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studyApp';
  private isScroll = false;

  // Следим за событием скролл
  @HostListener('window:scroll')
  // В случае скрола выполняем функцию
  onWindowScroll() {
    // Сравниваем текущее положение экрана и полную высоту экрана / 2
    (window.pageYOffset > window.screen.width / 2) ?
      this.isScroll = true :
      this.isScroll = false;
  }
}
