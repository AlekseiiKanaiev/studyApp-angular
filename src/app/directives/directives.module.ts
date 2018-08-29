import { NgModule } from '@angular/core';
// Для работы с ngClass  и тп
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DirectivesRouteModule } from './directives.route.module';

import { DirevtivesComponent } from './directives.component';
import { AttributiveDirectivesComponent } from './attributive/attributive.directives.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        DirectivesRouteModule
    ],
    declarations: [
        DirevtivesComponent,
        AttributiveDirectivesComponent
    ]
})
export class DirectivesModule {}
