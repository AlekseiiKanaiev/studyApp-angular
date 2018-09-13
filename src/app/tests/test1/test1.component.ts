import {Component} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'test1-comp',
    templateUrl: 'test1.component.html',
    styleUrls: ['test1.component.css']
})
export class Test1Component {
    winHeight = window.screen.height;
    winScroll = window.scrollX;
    winToTop = window.screen.availHeight;
}
