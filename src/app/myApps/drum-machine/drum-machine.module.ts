import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DrumMachineComponent } from './components/drum-machine.component';
import { ControlsComponent } from './components/controls/controls.component';
import { DisplayComponent } from './components/controls/display/display.component';
import { BankSwitchComponent } from './components/controls/bank-switch/bank-switch.component';
import { VolumeBarComponent } from './components/controls/volume-bar/volume-bar.component';
import { PowerSwitchComponent } from './components/controls/power-switch/power-switch.component';
import { DrumPadsComponent } from './components/drum-pads/drum-pads.component';
import { PadComponent } from './components/drum-pads/pad/pad.component';



const drumMachineRoutes: Routes = [
    {path: 'myApps/drum-machine', component: DrumMachineComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(drumMachineRoutes)
    ],

    declarations: [
    DrumMachineComponent,
    ControlsComponent,
    DisplayComponent,
    BankSwitchComponent,
    VolumeBarComponent,
    PowerSwitchComponent,
    DrumPadsComponent,
    PadComponent
    ],

    exports: [
        RouterModule
    ]
})
export class DrumMachineModule {}
