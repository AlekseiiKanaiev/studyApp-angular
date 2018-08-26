// Для работы с браузером требуется модуль BrowserModule.
import { BrowserModule } from '@angular/platform-browser';
/**Приложение Angular состоит из модулей. Модульная структура
 * позволяет легко подгружать и задействовать только те модули,
 * которые непосредственно необходимы. И каждое приложение имеет
 * как минимум один корневой модуль (root module), который, согласно
 * условностям, называется AppModule.*/
import { NgModule } from '@angular/core';
/**здесь импортируются модуль маршрутизации RouterModule и
 * класс Routes, представляющий коллекцию маршрутов: */
import { Routes, RouterModule } from '@angular/router';

// импортируются созданные компоненты, сервисы, модули.
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
