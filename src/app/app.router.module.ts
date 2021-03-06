import { NgModule } from '@angular/core';
/**здесь импортируются модуль маршрутизации AppRouteModule,
 * в котором собраны все свйсва маршрутизации для AppComponent: */
import { Routes, RouterModule } from '@angular/router';

import { MainTestComponent } from './tests/test.component';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './tests/calculator/components/calculator.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './authorization/_guards/auth.guard';
import { LoginComponent } from './authorization/login/login.component';
import { RegisterComponent } from './authorization/register/register.component';

const testChildren: Routes = [
    {path: 'calculator', component: CalculatorComponent}
];

/**Для каждого из компонентов мы можем определить свой маршрут.
 * определяется сам набор маршрутов
 * Здесь определено три маршрута, каждый из которых будет
 * обрабатываться отдельным компонентом.
 *
 * Для указания маршрута применяется параметр path.
 * Например, путь "about" будет представлять запрос типа
 * "http://localhost:3000/about" и будет обрабатываться
 * классом AboutComponent.
 * Если запрос не содержит никаких сегментов, например, просто
 * имя домена "http://localhost:3000/", то такой запрос будет
 * сопоставляться с путем "" (пустая строка) и будет
 * обрабатываться компонентом HomeComponent.
 * Если приложение получит запрос, который не подходит ни под
 * один из выше определенных маршрутов, то он будет
 * сопоставляться с шаблоном "**", где две звездочки
 * представляют любой путь.
 *
 * Когда будет выполняться переход по определенному пути,
 * например, "/about", система маршрутизации сопоставляет
 * последовательно URL запроса с параметрами path у каждого
 * маршрута. Данный процесс называется url matching.
 * В частности, система маршрутизации сопоставит url "/about"
 * с маршрутом:
 *
 * { path: 'about', component: AboutComponent}.
 *
 * И компонент AboutComponent будет выбран для обработки
 * запроса по пути /about.
 * Но при определении маршрутов следует учитывать их порядок.
 * Вполне возможно, что под определенный запрос будет
 * соответствовать сразу несколько маршрутов.
 * В этом случае запрос будет обрабатываться первым из них.
 * Другие же маршруты не будут учитываться.*/

 /**Чтобы ограничить доступ по маршруту "/about", в
 * определении этого маршрута прописывается параметр
 * canActivate: [AboutGuard]. */

// {path: 'about', component: AboutComponent, canActivate: [AboutGuard], canDeactivate: [ExitAboutGuard]},

/**мы можем задать критерий соответствия строки запроса
 * маршруту с помощью параметра pathMatch
 * Значение pathMatch:'full' указывает, что запрошенный адрес
 * должен полностью соответствовать маршруту, то есть должно
 * быть полное соответствие.
 * Например, запрос /contact полностью соотвествует маршруту
 * { path: 'contact', redirectTo: '/about', pathMatch:'full'},
 * поэтому будет выполняться переадресация на адрес /about.
 * А запрос /contact/5 не будет соответствовать этому маршруту,
 * так как после "contact" идут другие сегменты.*/

// {path: 'contact', redirectTo: '/about', pathMatch: 'full'},

/**Токен :id представляет параметр маршрута.
 * То есть мы сможем обратиться к компоненту с запросом типа
 * /item/6, и число 6 будет представлять параметр id. */

// {path: 'item/:id', component: ItemInfoCommponent},

/**Каждый из дочерних маршрутов сопоставляется не совсем
 * адресом url, а только с его частью.
 * Далее чтобы применить такие маршруты, у маршрута для
 * компонента ItemComponent применяется свойство children: */

// {path: 'item/:id', component: ItemInfoCommponent, children: itemRoutes},

const appRoutes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    // {path: 'old_version', component: RoutersMainComponent, children: oldVesionRoutes },
    // {path: 'login', component: LoginComponent},
    // {path: 'register', component: RegisterComponent},
    {path: 'test', component: MainTestComponent, children: testChildren},
    // {path: 'apps', component: MainTestComponent},
    /** Вполне возможно, что по какому-то маршруту мы захотим сделать
     * переадресацию по другому пути. Например, в случае, если нужного
     * маршрута для запроса не найдено, мы можем переадресовать
     * на главную страницу
     * Для переадресации указываем параметр redirectTo.
     * Его значение представляет путь переадресации.
     * В данном случае слеш указывает на первый маршрут или
     * на главную страницу.*/
    // {path: '**', redirectTo: '/'}
    // {path: '**', component: NotFoundComponent}
];

@NgModule({
    /**Чтобы применить маршруты, они передаются в
     * метод RouterModule.forRoot(appRoutes)
     * Метод RouterModule.forRoot() возвращает модуль,
     * который содержит сконфигурированный сервис Router.
     * Когда приложение загружается, Router выполняет
     * начальную навигацию по текущему URL, который стоит
     * в адресной строке браузера. */
    imports: [
        RouterModule.forRoot(appRoutes),
        // CalculatorModel
    ],
    exports: [RouterModule]
})
export class AppRouteModule {}
export const appRoutingComponents = [
    AppComponent,
    MainTestComponent,
    CalculatorComponent
];
