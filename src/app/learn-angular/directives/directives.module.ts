import { NgModule } from '@angular/core';
// Для работы с ngClass  и тп
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DirectivesRouteModule, directivesRoutingComponents } from './directives.route.module';

import { CreateAttributDirectivesComponent } from './attributive/create-directives/create.directives.component';
/**Как и компоненты, директивы также надо сначала
 * импортировать из файла, где они объявлены: */
import {
    BoldDirective,
    MouseBoldDirective,
    MouseBindBoldDirective,
    BoldHostDirective,
    BoldInputDirective
} from './attributive/create-directives/bold.directives';

import { NgIfDirectivesComponent } from './structure/ngIf/ngIf.directives.component';
import { NgForDirectivesComponent } from './structure/ngFor/ngFor.directives.component';
import { CreateStructureDirectivesComponent } from './structure/create-directives/create.structure.directives.component';
import { WhileDirective } from './structure/create-directives/while.directives';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DirectivesRouteModule
    ],
    /**директивы добавляется в секцию declarations: */
    declarations: [
        directivesRoutingComponents,
        CreateAttributDirectivesComponent,
        BoldDirective,
        MouseBoldDirective,
        MouseBindBoldDirective,
        BoldHostDirective,
        BoldInputDirective,
        NgIfDirectivesComponent,
        NgForDirectivesComponent,
        CreateStructureDirectivesComponent,
        WhileDirective
    ]
})
export class DirectivesModule {}
