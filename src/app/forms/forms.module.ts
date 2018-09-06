import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { formsRoutings, FormsRouteModule } from './forms.route.module';

@NgModule({
    imports: [
        FormsRouteModule,
        FormsModule,
        BrowserModule
    ],
    declarations: [formsRoutings]
})
export class MyFormsModule {}
