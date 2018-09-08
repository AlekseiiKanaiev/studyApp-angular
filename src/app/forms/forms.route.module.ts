import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { SimpleFormsComponent } from './simpleForms/simple.forms.component';
import { ValiadtionFormsComponent } from './validation/validation.forms.component';
import { NgFormsComponent } from './ngforms/ngforms.forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.forms.component';

const formsChildrenRoutes: Routes = [
    {path: 'simple-forms', component: SimpleFormsComponent},
    {path: 'validation', component: ValiadtionFormsComponent},
    {path: 'ngforms', component: NgFormsComponent},
    {path: 'reactive-forms', component: ReactiveFormsComponent}
];

const formsRoutes: Routes = [
    {path: 'forms', component: FormsComponent, children: formsChildrenRoutes}
];

@NgModule({
    imports: [RouterModule.forRoot(formsRoutes)],
    exports: [RouterModule]
})
export class FormsRouteModule {}
export const formsRoutings = [
    FormsComponent,
    SimpleFormsComponent,
    ValiadtionFormsComponent,
    NgFormsComponent,
    ReactiveFormsComponent
];
