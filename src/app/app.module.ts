// Для работы с браузером требуется модуль BrowserModule.
import { BrowserModule } from '@angular/platform-browser';
/**Приложение Angular состоит из модулей. Модульная структура
 * позволяет легко подгружать и задействовать только те модули,
 * которые непосредственно необходимы. И каждое приложение имеет
 * как минимум один корневой модуль (root module), который, согласно
 * условностям, называется AppModule.*/
import { NgModule } from '@angular/core';

// импортируются созданные компоненты, сервисы, модули.
import { AppRouteModule, appRoutingComponents } from './app.router.module';
import { AppComponent } from './app.component';
import { Test1Component } from './tests/test1/test1.component';
import { BasicModule } from './basic/basic.module';
import { DirectivesModule } from './directives/directives.module';
import { ServicesModule } from './sevices/services.module';
import { MyFormsModule } from './forms/forms.module';
import { calculatorComponents } from './tests/calculator/components/calculator.model';
import { HTTPModule } from './http/http.module';
import { ToTopComponent } from './toTop.component/to-top.component';
import { RoutingsModule } from './routings/routing.model';
import { HomeComponent } from './home.component';
// import { CalculatorService } from './tests/calculator/services/calculator.service';

@NgModule({
  declarations: [
    appRoutingComponents,
    Test1Component,
    calculatorComponents,
    ToTopComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    BasicModule,
    DirectivesModule,
    ServicesModule,
    MyFormsModule,
    HTTPModule,
    RoutingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
