import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ChargingStationService } from './service/charging-station.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'errorSolve';
  myStation:any;

  constructor(private station:ChargingStationService){
    this.station.getStation().subscribe((result: any)=>{
      this.myStation = result;
      console.warn(result);
      
    })
  }
}
