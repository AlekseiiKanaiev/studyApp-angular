// Для работы с браузером требуется модуль BrowserModule.
import { BrowserModule } from '@angular/platform-browser';
/**Приложение Angular состоит из модулей. Модульная структура
 * позволяет легко подгружать и задействовать только те модули,
 * которые непосредственно необходимы. И каждое приложение имеет
 * как минимум один корневой модуль (root module), который, согласно
 * условностям, называется AppModule.*/
import { NgModule } from '@angular/core';

// импортируются созданные компоненты, сервисы, модули.
import { LearnAngularModule } from './learn-angular/learn-angular.module';
import { AuthorizationModule } from './authorization/authorization.module';

import { AppRouteModule, appRoutingComponents } from './app.router.module';
import { AppComponent } from './app.component';
import { Test1Component } from './tests/test1/test1.component';
import { calculatorComponents } from './tests/calculator/components/calculator.model';
import { ToTopButtonComponent } from './toTopButton/to-top.component';
import { HomeComponent } from './home/home.component';
import { GoHomeButtonComponent } from './goHomeButton/goHome.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './authorization/_directives/alert.component';
import { GoBackButtonComponent } from './goBackButton/goBack.component';

import { GetDataFromAnotherServerService } from './tests/_services/getDataFromAnotherServer.service';

@NgModule({
  declarations: [
    appRoutingComponents,
    // BrowserAnimationsModule,
    Test1Component,
    calculatorComponents,
    ToTopButtonComponent,
    HomeComponent,
    GoHomeButtonComponent,
    AlertComponent,
    GoBackButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    LearnAngularModule,
    AuthorizationModule,
  ],
  providers: [
    GetDataFromAnotherServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
