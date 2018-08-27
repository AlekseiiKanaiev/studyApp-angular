import {Component} from '@angular/core';

@Component({
    selector: 'test1-comp',
    templateUrl: 'test1.component.html',
    styleUrls: ['test1.component.css']
})
export class Test1Component{
    public value: string = '0';
    private result: number;
    private sign: string;

    public clickNum($event:any): void{
        // console.log($event.toElement.innerText);
        (this.value === '0')?
        this.value = $event.toElement.innerText:
        this.value += $event.toElement.innerText;
        console.log($event.toElement.innerText);
    }
    public clickSign($event:any): void{
        console.log($event.toElement.innerText);
        if ($event.toElement.innerTex !== '='){
            console.log(0);
            this.sign = $event.toElement.innerText;
            this.result = parseInt(this.value, 10);
            this.value = '0';
            console.log(`result ${this.result}`);
        }
        else{
            switch(this.sign){
                case '+':
                    console.log(parseInt(this.value, 10));
                    this.result += parseInt(this.value, 10);
                    this.value = this.result.toString();
                    break;
                case '-':
                    console.log(2);
                    this.result -= parseInt(this.value, 10);
                    this.value = this.result.toString();
                    break;
                case '*':
                    console.log(3);
                    this.result *= parseInt(this.value, 10);
                    this.value = this.result.toString();
                    break;
                case '/':
                    console.log(4);
                    this.result /= parseInt(this.value, 10);
                    this.value = this.result.toString();
                    break;
                default:
                    break;
            }
        }
    }
}
