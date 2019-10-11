import { BehaviorSubject } from 'rxjs';


export class CalculatorService {
    private value = '0';
    private result = 0;
    private isDot = false;
    private isEquals = false;
    private sign: string;

    private obsValue: BehaviorSubject<string> = new BehaviorSubject(this.value);

    getValue(): string {
        return this.obsValue.getValue();
    }

    private changeValue(value: string): void {
        this.value = value;
        this.obsValue.next(this.value);
    }

    takeNum (value: string): void {
        if (value === '.') {
            if (!this.isDot) {
                this.isDot = true;
                if (this.isEquals) {
                    this.isEquals = false;
                    this.changeValue('0.');
                } else {
                    this.changeValue(this.value + value);
                }
            }
        } else {
            if (this.isEquals) {
                this.isEquals = false;
                this.changeValue(value);
            } else {
                (this.value === '0') ? this.changeValue(value) : this.changeValue(this.value + value);
            }
        }
    }

    takeSign (value: string) {
        if (value === '=') {
            this.result = this.calculate(parseFloat(this.value), this.sign);
            this.sign = value;
            this.isEquals = true;
            this.changeValue((Math.round(this.result * 100000) / 100000).toString());
        } else {
            if (this.sign) {
                this.result = this.calculate(parseFloat(this.value), this.sign);
            } else {
                this.result = parseFloat(this.value);
            }
            this.sign = value;
            this.isDot = false;
            this.isEquals = false;
            this.changeValue('0');
        }
    }

    private calculate(num: number, sign1: string): number {
        switch (sign1) {
            case '+':
                return this.result + num;
            case '-':
                return this.result - num;
            case '*':
                return this.result * num;
            case '/':
                return this.result / num;
            default:
                return num;
        }
    }
}
