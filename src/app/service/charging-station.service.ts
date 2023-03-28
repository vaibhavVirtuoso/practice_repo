import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChargingStationService {

  constructor(private http:HttpClient) { }

  getStation():any{
    return this.http.get("http://localhost:3000/myStation");
  }
}
