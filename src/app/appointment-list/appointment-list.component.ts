import { Component } from '@angular/core';
import { Appointment } from '../models/appointment'; //Here we have to import the interface when we want to use it
//We need to import it so that onInit dziala
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {
  //this one gets invoked when the component is ininitialized so onece
  ngOnInit(): void {
    this.loadDataFromJSON();
  }

  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  addAppointment() {
    if(this.newAppointmentDate && this.newAppointmentTitle.trim().length) {
      let newAppointment: Appointment = {
        id: Date.now(), // this creates a long strings of number of milisseconds since 1997 or smth
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment); //pushes the appointment into list of appointments type apoointment
     
      //it resets the placeholders for new values
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();

      this.saveDataToJSON();
    }
  }
  
  deleteAppointment(index: number) {
    this.appointments.splice(index, 1); // this removes set number of items on index 
    this.saveDataToJSON();
  }

  saveDataToJSON() {
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }

  loadDataFromJSON(){
    //We loades the data to savedAppointments from localStorage
    let savedAppointments = localStorage.getItem("appointments");
    //Then we check if local storage is empty if not we !!!{parse}!!! the json data to the typescript objects and assigns it
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []; 
  }
}




