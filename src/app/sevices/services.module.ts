import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
        CommonModule,
        ServicesRouteModule
    ]
})
export class ServicesModule {}
