import { Component } from '@angular/core';

@Component({
    selector: 'app-to-top-comp',
    template: `
        <button class = 'to-top' (click) = onClick()>{{winScroll}}</button>
    `,
    styles: [`
    .to-top{
        position: fixed;
        color: rgba(#444444,0.8);
        bottom: 25px;
        right: 10px;
        background-color: white;
        z-index: 12;
        border-radius: 10em;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 26px;
        cursor: pointer;
        transition: all 0.25s ease;
        opacity: 0.5;
    }
    `]
})
export class ToTopComponent {
    winScroll = window.scrollX;

    onClick(): void {

    }
}
