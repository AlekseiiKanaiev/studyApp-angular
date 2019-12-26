import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicMainComponent } from './basic-main.component';
import { ComponentsComponent } from './basic-components/components.component';
import { BindingsComponent } from './bindings/bindings.component';
import { LifeCycleComponent } from './lifecycle/lifecycle.component';
import { TemplateVariablesComponent } from './template-var/template-var.component';
import { AuthGuard } from 'src/app/authorization/_guards/auth.guard';

const basicChildrenRoutes: Routes = [
    {path: 'components', component: ComponentsComponent},
    {path: 'bindings', component: BindingsComponent},
    {path: 'lifecycle', component: LifeCycleComponent},
    {path: 'template-variables', component: TemplateVariablesComponent}
];

const basicRoutes: Routes = [
    {path: 'basic', component: BasicMainComponent, children: basicChildrenRoutes,  canActivate: [AuthGuard]},
];

@NgModule({
    imports: [
        RouterModule.forRoot(basicRoutes)
    ],
    exports: [RouterModule],
})
export class BasicRouteModule {}
export const basicRoatingComponents = [
    BasicMainComponent,
    ComponentsComponent,
    BindingsComponent,
    LifeCycleComponent,
    TemplateVariablesComponent
];
