import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements DoCheck, OnInit {
  title = 'studyApp';
  private url: any;

  constructor (private router: Router, private loc: Location, private ar: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.events.subscribe(
      () => {
        this.url = this.loc.path();
      }
    );
  }

  ngDoCheck() {
    console.log(`URL - ${this.url}`);
  }

  goHome(): void {
    this.router.navigate(['']);
}
}
