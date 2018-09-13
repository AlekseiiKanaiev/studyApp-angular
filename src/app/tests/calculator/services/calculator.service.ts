export class CalculatorService {
    private value = '0';
    private result = 0;
    private sign: string;
    private isEquals = false;

    public getValue(): string {
        return this.value;
    }

    public takeNum(value: string): void {
        if (this.isEquals) {
            this.value = '0';
            this.isEquals = false;
        }
        if (value === '.') {
          this.value += value;
        } else {
          (this.value === '0') ? this.value = value : this.value += value;
        }
    }

    public takeSign(value: string): void {
        if (value === '=') {
            if (this.sign !== '=') { this.calculating(this.sign); }
            this.isEquals = true;
        } else {
            (this.sign) ? this.calculating(this.sign) : this.result = parseFloat(this.value);
            this.value = '0';
        }
        this.sign = value;
    }

    private calculating(sign: string): void {
        switch (sign) {
          case '+':
            this.result += parseFloat(this.value);
            break;
          case '-':
            this.result -= parseFloat(this.value);
            break;
          case '*':
            this.result *= parseFloat(this.value);
            break;
          case '/':
            this.result /= parseFloat(this.value);
            break;
          default:
            this.result = parseFloat(this.value);
            break;
        }
        this.value = this.result.toString();
    }
}

/**
import { BehaviorSubject } from 'rxjs';

export class CalculatorService {
    private value = '0';
    private result = 0;
    private sign: string;
    private isEquals = false;

    public obsValue: BehaviorSubject<string> = new BehaviorSubject(this.value);

    public getValue(): string {
        return this.value;
    }

    public takeNum(value: string): void {
        if (this.isEquals) {
            this.changeValue(value);
            this.isEquals = false;
        } else {
            (this.value === '0') ? this.changeValue(value) : this.changeValue(this.value + value);
        }
    }

    public takeSign(value: string): void {
        if (value === '=') {
            if (this.sign !== '=') { this.calculating(this.sign); }
            this.isEquals = true;
        } else {
            (this.sign) ? this.calculating(this.sign) : this.result = parseFloat(this.value);
            this.changeValue('0');
        }
        this.sign = value;
    }

    private changeValue(value: string) {
      this.obsValue.next(value);
      this.value = value;
    }

    private calculating(sign: string): void {
        switch (sign) {
          case '+':
            this.result += parseFloat(this.value);
            break;
          case '-':
            this.result -= parseFloat(this.value);
            break;
          case '*':
            this.result *= parseFloat(this.value);
            break;
          case '/':
            this.result /= parseFloat(this.value);
            break;
          default:
            this.result = parseFloat(this.value);
            break;
        }
        this.changeValue(this.result.toString());
    }
}
 */
