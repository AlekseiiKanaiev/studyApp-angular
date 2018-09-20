import { Component } from '@angular/core';
import { ComponentCanDeactivate } from '../exit.about.guard';
import { Observable } from 'rxjs';
/**мы хотим управлять навигацией с компонента AboutComponent.
 * В этом случае класс AboutComponent должен реализовать
 * интерфейс ComponentCanDeactivate */

@Component({
    selector: 'app-guards-about-comp',
    templateUrl: './about.component.html',
    styleUrls: ['../../routing.component.css']
})
export class AboutGuardsComponent implements ComponentCanDeactivate {
    /**Для имитации функционала в класс AboutComponent добавлено
     * свойство saved, которое указывает, сохранены ли данные. */
    private isSaved = false;

    /**С помощью метода save(), который вызывается по нажатию
     * на кнопку, мы можем управлять значением этой переменной.
     * К примеру, нажали на кнопку, значит данные сохранены,
     * и свойство saved равно true. */
    save(): void {
        this.isSaved = true;
    }
    /**Далее в классе AboutComponent реализуем метод
     * canDeactivate().
     * Этот метод и будет вызываться в ExitAboutGuard.
     * Поэтому в этом методе мы можем проверить состояние
     * компонента и решить, стоит ли делать переход,
     * надо ли выполнить какие-то дополнительные действия и т.д. */
    canDeactivate(): Observable<boolean> | boolean {
        return (this.isSaved) ?
            true :
            /**В данном случае, если this.saved == false
             * (то есть условно, если данные не сохранены),
             * то выводим диалоговое окно для подтверждения
             * действия. */
            confirm('Are you sure you want to leave?');
    }
}
