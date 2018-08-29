import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirevtivesComponent } from './directives.component';

const directivesChildrenRoutes: Routes = [
    {}
];

const diectivesRoutes: Routes = [
    {path: 'directives', component: DirevtivesComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(diectivesRoutes)
    ],
    exports: [],
})
export class DirectivesRouteModule {}
