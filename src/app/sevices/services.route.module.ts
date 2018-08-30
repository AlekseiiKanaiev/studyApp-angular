import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';

const servicesRoutes: Routes = [
    {path: 'services', component: ServicesComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(servicesRoutes)
    ],
    exports: [RouterModule]
})
export class ServicesRouteModule {}
export const servicesRoutingComponents = [
    ServicesComponent
];
