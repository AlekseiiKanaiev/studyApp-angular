import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServicesRouteModule, servicesRoutingComponents } from './services.route.module';
import { DataComponent } from './data/data.component';


@NgModule({
    declarations: [
        servicesRoutingComponents,
        DataComponent

    ],
    imports: [
        FormsModule,
        BrowserModule,
        ServicesRouteModule
    ]
})
export class ServicesModule {}
