import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = 'http://localhost:8000/api';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllMonitorings(): Observable<any>{
    return this.http.get(this.baseurl + '/monitoring/', 
    {headers :this.httpHeaders});
  }

  getOneMonitoring(id): Observable<any>{
    return this.http.get(this.baseurl + '/monitoring/' + id + '/', 
    {headers :this.httpHeaders});
  }

  updateMonitoring(monitoring): Observable<any>{
    const body = {
      date: monitoring.date,
      energy: monitoring.energy,
      reactive_energy: monitoring.reactive_energy,
      power: monitoring.power,
      maximeter: monitoring.maximeter,
      reactive_power: monitoring.reactive_power,
      voltage: monitoring.voltage,
      intensity: monitoring.intensity,
      power_factor: monitoring.power_factor
    }
    return this.http.put(this.baseurl + '/monitoring/' + monitoring.id + '/', body,
    {headers :this.httpHeaders});
  }

  createMonitoring(monitoring): Observable<any>{
    const body = {
      date: monitoring.date,
      energy: monitoring.energy,
      reactive_energy: monitoring.reactive_energy,
      power: monitoring.power,
      maximeter: monitoring.maximeter,
      reactive_power: monitoring.reactive_power,
      voltage: monitoring.voltage,
      intensity: monitoring.intensity,
      power_factor: monitoring.power_factor
    }
    return this.http.post(this.baseurl + '/monitoring/', body,
    {headers :this.httpHeaders});
  }

  deleteMonitoring(id): Observable<any>{
    return this.http.delete(this.baseurl + '/monitoring/' + id + '/',
    {headers :this.httpHeaders});
  }
}
