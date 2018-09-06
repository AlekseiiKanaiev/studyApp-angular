import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromsComponent } from './forms.component';
import { SimpleFormsComponent } from './simpleForms/simple.forms.component';
import { ValiadtionFormsComponent } from './validation/validation.forms.component';

const formsChildrenRoutes: Routes = [
    {path: 'simple-forms', component: SimpleFormsComponent},
    {path: 'validation', component: ValiadtionFormsComponent},
    // {path: 'lifecycle', component: },
    // {path: 'template-variables', component: }
];

const formsRoutes: Routes = [
    {path: 'forms', component: FromsComponent, children: formsChildrenRoutes}
];

@NgModule({
    imports: [RouterModule.forRoot(formsRoutes)],
    exports: [RouterModule]
})
export class FormsRouteModule {}
export const formsRoutings = [
    FromsComponent,
    SimpleFormsComponent,
    ValiadtionFormsComponent
];
