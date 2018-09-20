import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { formsRoutings, FormsRouteModule } from './forms.route.module';

@NgModule({
    imports: [
        FormsRouteModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [formsRoutings]
})
export class MyFormsModule {}
