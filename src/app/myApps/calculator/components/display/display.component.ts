import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-calculator-display-comp',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.css']
})
export class CalculatorDisplayComponent implements OnInit {
    private value = 0;

    ngOnInit(): void {

    }
}
