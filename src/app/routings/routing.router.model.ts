import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing.component';
import { ItemComponent } from './params/item.component';

const rouitingChildren: Routes = [
    /**Токен :id представляет параметр маршрута.
     * То есть мы сможем обратиться к компоненту с запросом
     * типа /item/6, и число 6 будет представлять параметр id. */
    {path: 'item/:id', component: ItemComponent}
];

const routingRoutes: Routes = [
    {path: 'routings', component: RoutingComponent, children: rouitingChildren}
];

@NgModule({
    imports: [RouterModule.forRoot(routingRoutes)],
    exports: [RouterModule]
})
export class RoutingRouterModule {}

export const routingComponents = [
    RoutingComponent,
    ItemComponent
];
