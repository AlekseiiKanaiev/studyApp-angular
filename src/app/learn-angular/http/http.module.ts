import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/**должен быть импортирован класс HttpClientModule из
 * пакета "@angular/common/http" */
/**Стоит отметить, что в предыдущих версиях Angular (2,4)
 * использовался для взаимодействия с сетью тип HttpModule
 * из пакета "@angular/http".
 * Начиная с версии Angular 5 тип HttpModule и вообще пакет
 * @angular/http являются устаревшими, поэтому рекомендуется
 * применять именно класса HttpClient и HttpClientModule */
import { HttpClientModule } from '@angular/common/http';
import { HTTPRouterModule, httpRoutingComponents } from './http.router.module';
import { Httpservice } from './http.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        HTTPRouterModule
    ],
    exports: [],
    declarations: [
        httpRoutingComponents,
    ],
    providers: [Httpservice]
})
export class HTTPModule {}
