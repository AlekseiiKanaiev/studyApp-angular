import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RandomQuoteComponent } from './components/random-quote.component';
import { QouteBoxComponent } from './components/qoute-box/qoute-box.component';
import { QuoteMessageComponent } from './components/qoute-box/quote-message/quote-message.component';
import { ButtonsComponent } from './components/qoute-box/buttons/buttons.component';

const randomQouteRoutes: Routes = [
    {path: 'myApps/random-qoute', component: RandomQuoteComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(randomQouteRoutes)
    ],
    declarations: [
        RandomQuoteComponent,
        QouteBoxComponent,
        QuoteMessageComponent,
        ButtonsComponent
    ],
    providers: [

    ],
    exports: [
        RouterModule
    ]
})
export class RandomQuoteModule {}
