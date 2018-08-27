import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicMainComponent } from './basic-main.component';

const basicRoutes: Routes = [
    {path: 'basic', component: BasicMainComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(basicRoutes)
    ],
    exports: [],
})
export class BasicRouteModule {}
