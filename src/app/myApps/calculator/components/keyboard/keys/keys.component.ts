import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import store from './../../../store/store';
import actions from './../../../store/actions';

const {NUMBER, SIGN} = actions;

@Component({
    selector: 'app-calculator-keys-comp',
    template: `<button (click) = 'click($event)'
                [style.background-color]="isLastInRow ? 'orange' : isFirstRow ? 'gray' : '#ccc'">
                    {{ key }}
                </button>`,
    styleUrls: ['../keyboard.component.css']
})
export class CalculatorKeysComponent implements OnInit {
    private re = /[0-9\.]/;
    @Input() key: string;
    @Input() isLastInRow: boolean;
    @Input() isFirstRow: boolean;

    @Output() change = new EventEmitter<boolean>();

    click(ivent: MouseEvent): void {
        const value = ivent.toElement.innerHTML;
        if (this.re.test(value)) {
            store.dispatch({type: NUMBER, value: value});
            this.change.emit(false);
        } else {
            store.dispatch({type: SIGN, value: value});
            if (value === 'C') {
                this.change.emit(true);
            } else if (value !== 'AC') {
                this.change.emit(false);
            }
        }
    }
    ngOnInit () {
        // console.log(this.isLastInRow);
    }

    // click(value: MouseEvent): void {
    //     console.log(value.toElement.innerHTML);
    //     store.dispatch({type: NUMBER, value: value.toElement.innerHTML});
    // }
}
