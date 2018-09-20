import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { LogService } from '../services/log.service';
import { Phone } from '../phone';

@Component({
    selector: 'app-data-comp',
    templateUrl: './data.component.html',
    providers: [DataService, LogService]
})
export class DataComponent implements OnInit {
    items: Phone[] = [];
    constructor(private data: DataService) {}

    addItem(name: string, price: number) {
        this.data.addData(name, price);
    }

    ngOnInit(): void {
        this.items = this.data.getData();
    }
}
