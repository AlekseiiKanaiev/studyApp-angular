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
import { calculatorComponents } from './tests/calculator/components/calculator.model';
import { ToTopComponent } from './toTop.component/to-top.component';
import { HomeComponent } from './home/home.component';
import { GoHomeComponent } from './goHome/goHome.component';
import { LearnAngularModule } from './learn-angular/learn-angular.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { AlertComponent } from './authorization/_directives/alert.component';

@NgModule({
  declarations: [
    appRoutingComponents,
    Test1Component,
    calculatorComponents,
    ToTopComponent,
    HomeComponent,
    GoHomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    LearnAngularModule,
    AuthorizationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
