import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//We need this module
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//first we import the component.
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

@NgModule({
  //Here we declare the appointment list component inside app module
  declarations: [
    AppComponent,
    AppointmentListComponent
  ],
  //here we import modules into our declarations
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
