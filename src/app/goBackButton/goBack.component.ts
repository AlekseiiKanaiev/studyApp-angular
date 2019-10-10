import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-goback-comp',
    template: `
            <button class='goBack' (click) = 'goBack()'>go back</button>
    `,
    styles: [`
        .goBack{
            margin-bottom: 20px
        }
    `]
})
export class GoBackButtonComponent implements OnInit {
    private isButton = false;
    constructor(private location: Location) {}

    ngOnInit(): void {
    }

    goBack() {
        this.location.back();
    }
}
