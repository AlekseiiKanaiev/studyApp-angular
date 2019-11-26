import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../_services/state.service';
import { DisplayService } from '../../../_services/display.service';

@Component({
  selector: 'app-drum-machine-volume-bar',
  templateUrl: './volume-bar.component.html',
  styleUrls: ['./volume-bar.component.css']
})
export class VolumeBarComponent implements OnInit {
  private isPower = true;
  private soundVolume = 0.3;

  constructor(private stateServ: StateService, private displayServ: DisplayService) { }

  ngOnInit() {
    this.stateServ.obsPower.subscribe(
      (value) => this.isPower = value
    );
  }

  onClick(e) {
    // console.log(e.target.value);
    const value = e.target.value;
    this.stateServ.setVolume(value);
    this.displayServ.changeMessage(Math.round(value * 100).toString());
    this.displayServ.setTimer('', 3000);
  }
}
