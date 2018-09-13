import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { formsRoutings, FormsRouteModule } from './forms.route.module';

@NgModule({
    imports: [
        FormsRouteModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [formsRoutings]
})
export class MyFormsModule {}
