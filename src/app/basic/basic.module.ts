import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BasicMainComponent } from './basic-main.component';
import { TempateVarsChildComponent } from './template-var/temlate-var.child/template-var.child.component';
import { ViewChildComponent } from './template-var/viewChild/viewChild.component';
import { ContentChildComponent } from './template-var/contentChild/content.child.component';
import { BasicRouteModule, basicRoatingComponents } from './basic-route.module';


@NgModule({
    imports: [
        BasicRouteModule,
        FormsModule
    ],
    declarations: [
        basicRoatingComponents,
        TempateVarsChildComponent,
        ViewChildComponent,
        ContentChildComponent,
    ],
    bootstrap: [BasicMainComponent]

})
export class BasicModule {}
