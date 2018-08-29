import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BasicRouteModule } from './basic-route.module';

import { BasicMainComponent } from './basic-main.component';
import { ComponentsComponent } from './basic-components/components.component';
import { BindingsComponent } from './bindings/bindings.component';
import { LifeCycleComponent } from './lifecycle/lifecycle.component';
import { TemplateVariablesComponent } from './template-var/template-var.component';
import { TempateVarsChildComponent } from './template-var/temlate-var.child/template-var.child.component';
import { ViewChildComponent } from './template-var/viewChild/viewChild.component';
import { ContentChildComponent } from './template-var/contentChild/content.child.component';

@NgModule({
    imports: [
        BasicRouteModule,
        FormsModule
    ],
    declarations: [
        BasicMainComponent,
        ComponentsComponent,
        BindingsComponent,
        LifeCycleComponent,
        TemplateVariablesComponent,
        TempateVarsChildComponent,
        ViewChildComponent,
        ContentChildComponent
    ],

})
export class BasicModule {}
