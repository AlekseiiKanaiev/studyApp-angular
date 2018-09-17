import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingRouterModule, routingComponents } from './routing.router.model';

@NgModule({
    imports: [
        CommonModule,
        RoutingRouterModule
    ],
    declarations: [
        routingComponents
    ]
})
export class RoutingsModule {}
