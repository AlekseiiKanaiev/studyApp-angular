import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HTTPComponent } from './http.component';
import { SendRequestComponent } from './sending-requests/send-req.http.component';
import { ObservableHttpComponent } from './observable/observable.http.component';

const httpChildrenRoutes: Routes = [
    {path: 'sending-requests', component: SendRequestComponent},
    {path: 'observable-in-http', component: ObservableHttpComponent}
];

const httpRoutes: Routes = [
    {path: 'http', component: HTTPComponent, children: httpChildrenRoutes}
];

@NgModule({
    imports: [RouterModule.forRoot(httpRoutes)],
    exports: [RouterModule]
})
export class HTTPRouterModule {}

export const httpRoutingComponents = [
    HTTPComponent,
    SendRequestComponent,
    ObservableHttpComponent
];
