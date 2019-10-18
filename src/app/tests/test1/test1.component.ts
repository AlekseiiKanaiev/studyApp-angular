import {Component, OnInit} from '@angular/core';
import { GetDataFromAnotherServerService } from '../_services/getDataFromAnotherServer.service';
import { Video } from '../_models/video';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'test1-comp',
    templateUrl: 'test1.component.html',
    styleUrls: ['test1.component.css']
})
export class Test1Component implements OnInit {

    winHeight = window.screen.height;
    winScroll = window.scrollX;
    winToTop = window.screen.availHeight;

    someData: any;

    constructor(private getDataService: GetDataFromAnotherServerService) {}

    ngOnInit(): void {
        this.getDataService.getData().subscribe(
            data => {
                console.log(data);
                this.someData = data;
            }
        );
    }
}
