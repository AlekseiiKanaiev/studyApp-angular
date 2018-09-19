import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// Класс AboutGuard реализует интерфейс CanActivate
export class EnterAboutGuard implements CanActivate {
    // а именно его метод canActivate()
    /**Этот метод получает два параметра -
     * объекты ActivatedRouteSnapshot и RouterStateSnapshot,
     * которые содержат информацию о запросе.
     * ActivatedRouteSnapshot позволяет получить различную
     * информацию из запроса, в том числе параметры маршрута
     * и строки запроса.
     * Например, если бы в маршруте использовался параметр id,
     * то мы могли бы его здесь получить (route.params['id'])*/

    /**Результат метода - логическое значение, либо
     * логическое значение, обернутое в объект Observable.
     * Если AboutGuard разрешает переход, то метод canActivate()
     * должен возвращать true. Если доступ запрещен, то метод
     * возвращает false. */
    canActivate (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<boolean> | boolean {
            /**Для тестирования обоих ситуаций здесь вызывается
             * метод confirm(), который отображает диалоговое
             * окно с выбором.
             * Если пользователь нажмет на кнопку отмены,
             * то метод confirm возвратит false.
             * Если же пользователь подтвердит действие,
             * то будет возвращено значение true. */
            return confirm('Are you sure?');
    }
}
