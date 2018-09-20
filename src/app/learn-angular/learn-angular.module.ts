import { NgModule } from '@angular/core';

import { BasicModule } from './basic/basic.module';
import { DirectivesModule } from './directives/directives.module';
import { ServicesModule } from './sevices/services.module';
import { MyFormsModule } from './forms/forms.module';
import { HTTPModule } from './http/http.module';
import { RoutingsModule } from './/routings/routing.model';

@NgModule({
    imports: [
        BasicModule,
        DirectivesModule,
        ServicesModule,
        MyFormsModule,
        HTTPModule,
        RoutingsModule
    ]
})
export class LearnAngularModule {}
