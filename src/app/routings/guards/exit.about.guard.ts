import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router';

/**Название интерфейса не столь важно, главное, чтобы он
 * определял метод canDeactivate(), который возвращает объект
 * boolean | Observable<boolean>.
 * Если нельзя осуществить переход, то возвращается значение
 * false, иначе возвращается значение true.
 * Это может быть просто логическое значение,
 * либо же логическое значение, обернутое в объект Observable. */
export interface  ComponentCanDeactivate {
    canDeactivate: () => Observable<boolean> | boolean;
}

/**ExitAboutGuard должен реализовать метод canDeactivate()
 * интерфейса CanDeactivate.
 * Этот метод собственно и управляет уходом с компонента и
 * переходом на другой компонент. */
export class ExitAboutGuard implements CanDeactivate<ComponentCanDeactivate> {
    /**Для управления навигацией в этот метод передается
     * компонент, с которого осуществляется переход.
     * Благодаря этому мы можем учитывать состояние компонента
     * при переходе.
     * Но передаваемый параметр должен реализовать определенный
     * интерфейс - в данном случае ComponentCanDeactivate.  */
    canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
