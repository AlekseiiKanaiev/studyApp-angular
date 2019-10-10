import { Component } from '@angular/core';

@Component({
    selector: 'app-calculator-keyboard-comp',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.css']
})
export class CalculatorKeyboardComponent {
    private numKeys = [['1', '2', '3', '0'], ['4', '5', '6'], ['7', '8', '9', '.']];
    private signKeys = [['+', '-'], ['*', '/'], ['=']];
}
