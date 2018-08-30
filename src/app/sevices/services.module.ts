import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServicesRouteModule, servicesRoutingComponents } from './services.route.module';


@NgModule({
    declarations: [
        servicesRoutingComponents

    ],
    imports: [
        FormsModule,
        BrowserModule,
        ServicesRouteModule
    ]
})
export class ServicesModule {}
