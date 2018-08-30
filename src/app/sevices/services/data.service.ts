// Этот файл будет содержать код сервиса.
import { Phone } from '../phone';

export class DataService {
    /**В сервисе определен массив данных и методы для работы
     * с ним.
     * В реальном приложении эти данные можно получать с
     * сервера или из какого-либо внешнего хранилища. */
    private data: Phone[] = [
        { name: 'Apple iPhone 7', price: 56000},
        { name: 'HP Elite x3', price: 56000},
        { name: 'Alcatel Idol S4', price: 25000}
    ];

    getData(): Phone[] {
        return this.data;
    }
    addData(name: string, price: number): void {
        this.data.push(new Phone(name, price));
    }
}
