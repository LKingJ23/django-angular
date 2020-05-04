import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService, UserService]
})
export class AppComponent implements OnInit {
  selectedMonitoring;
  input;
  headElements = ['ID', 'Date', 'Energy', 'Reactive Energy', 'Power', 'Maximeter', 'Reactive Power', 'Voltage', 'Intensity', 'Power Factor'];
  monitorings = [{
    id: -1,
    date: 0,
    energy: 0,
    reactive_energy: 0,
    power: 0,
    maximeter: 0,
    reactive_power: 0,
    voltage: 0,
    intensity: 0,
    power_factor: 0
  }];

  constructor(private api: ApiService, private userService: UserService){
    this.getMonitorings();
    this.selectedMonitoring = {
      id: -1,
      date: 0,
      energy: 0,
      reactive_energy: 0,
      power: 0,
      maximeter: 0,
      reactive_power: 0,
      voltage: 0,
      intensity: 0,
      power_factor: 0
    }
  }

  ngOnInit(){
    this.input = {
      username: '',
      password: '',
      email: ''
    };
  }

  registerUser(){
    this.userService.registerNewUser(this.input).subscribe(
      response => {
        alert('El usuario ' + this.input.username + 'ha sido creado')
      },
      error => console.log('Error: ', error)
    );
  }

  loginUser(){
    this.userService.loginUser(this.input).subscribe(
      response => {
        console.log(response);
        alert('Usuario ' + this.input.username + ' ha iniciado sesión')
      },
      error => console.log('Error: ', error)
    );
  }

  getMonitorings = () => {
    this.api.getAllMonitorings().subscribe(
      data => {
        this.monitorings = data;
        console.log(this.monitorings);
      },
      error => {
        console.log(error);
      }
    );
  }

  monitoringClicked = (monitoring) =>{
    this.api.getOneMonitoring(monitoring.id).subscribe(
      data => {
        this.selectedMonitoring = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  updateMonitoring = () =>{
    this.api.updateMonitoring(this.selectedMonitoring).subscribe(
      data => {
        this.getMonitorings();
      },
      error => {
        console.log(error);
      }
    );
  }

  createMonitoring = () =>{
    this.api.createMonitoring(this.selectedMonitoring).subscribe(
      data => {
        this.monitorings.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteMonitoring = () =>{
    this.api.deleteMonitoring(this.selectedMonitoring.id).subscribe(
      data => {
        this.getMonitorings();
      },
      error => {
        console.log(error);
      }
    );
  }
}
