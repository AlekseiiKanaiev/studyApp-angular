import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BasicRouteModule } from './basic-route.module';

import { BasicMainComponent } from './basic-main.component';
import { ComponentsComponent } from './basic-components/components.component';
import { BindingsComponent } from './bindings/bindings.component';

@NgModule({
    imports: [
        BasicRouteModule,
        FormsModule
    ],
    declarations: [
        BasicMainComponent,
        ComponentsComponent,
        BindingsComponent
    ],

})
export class BasicModule {}
