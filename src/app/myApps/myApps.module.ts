import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MyAppsComponent } from './myApps.component';
import { CalculatorModule } from './calculator/calculator.module';

const myAppsRoutes: Routes = [
    {path: 'myApps', component: MyAppsComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(myAppsRoutes),
        CalculatorModule
    ],
    declarations: [
        MyAppsComponent
    ],
    bootstrap: [MyAppsComponent],
    exports: [
        RouterModule
    ]
})
export class MyAppsModule {}
