import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing.component';
import { ItemComponent } from './params/item.component';
import { ParamsComponent } from './params/params.component';
import { GuardsComponent } from './guards/guards.component';
import { AboutGuardsComponent } from './guards/about/about.component';
import { EnterAboutGuard } from './guards/enter.about.guard';
import { ExitAboutGuard } from './guards/exit.about.guard';

const itemChild: Routes = [
    /**Токен :id представляет параметр маршрута.
     * То есть мы сможем обратиться к компоненту с запросом
     * типа /item/6, и число 6 будет представлять параметр id. */
    {path: 'item/:id', component: ItemComponent}
];

// const aboutGuardsChild: Routes = [
//     {path: 'about', component: AboutGuardsComponent, canActivate: [AboutGuard]}
// ];

const rouitingChildren: Routes = [
    {path: 'params', component: ParamsComponent, children: itemChild},
    {path: 'guards', component: GuardsComponent, pathMatch: 'full'}
];

const routingRoutes: Routes = [
    {path: 'routings', component: RoutingComponent, children: rouitingChildren},
    /**Чтобы ограничить доступ по маршруту "/about",
     * в определении этого маршрута прописывается параметр
     * canActivate: [AboutGuard]. */
    {path: 'routings/guards/about',
    component: AboutGuardsComponent,
    canActivate: [EnterAboutGuard],
    canDeactivate: [ExitAboutGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routingRoutes)],
    exports: [RouterModule],
    // AboutGuard должен быть указан в списке провайдеров модуля
    providers: [EnterAboutGuard, ExitAboutGuard]
})
export class RoutingRouterModule {}

export const routingComponents = [
    RoutingComponent,
    ItemComponent,
    ParamsComponent,
    GuardsComponent,
    AboutGuardsComponent
];
