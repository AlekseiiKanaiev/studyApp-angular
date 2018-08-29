import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DirectivesRouteModule } from './directives.route.module';

import { DirevtivesComponent } from './directives.component';


@NgModule({
    imports: [
        FormsModule,
        DirectivesRouteModule
    ],
    declarations: [
        DirevtivesComponent
    ]
})
export class DirectivesModule {}
