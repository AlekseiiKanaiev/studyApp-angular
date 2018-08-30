import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirevtivesComponent } from './directives.component';
import { AttributiveDirectivesComponent } from './attributive/attributive.directives.component';
import { StructureDirectivesComponent } from './structure/structure.direcctives.component';

const directivesChildrenRoutes: Routes = [
    {path: 'attributive', component: AttributiveDirectivesComponent},
    {path: 'structure', component: StructureDirectivesComponent}
];

const diectivesRoutes: Routes = [
    {path: 'directives', component: DirevtivesComponent, children: directivesChildrenRoutes},
];

@NgModule({
    imports: [
        RouterModule.forRoot(diectivesRoutes)
    ],
    exports: [RouterModule],
})
export class DirectivesRouteModule {}
export const directivesRoutingComponents = [
    DirevtivesComponent,
    AttributiveDirectivesComponent,
    StructureDirectivesComponent
];
