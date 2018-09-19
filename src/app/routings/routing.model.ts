import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoutingRouterModule, routingComponents } from './routing.router.model';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RoutingRouterModule
    ],
    declarations: [
        routingComponents
    ]
})
export class RoutingsModule {}
