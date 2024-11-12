import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {

  appointment:Appointment=new Appointment();

  constructor(private appointmentService: AppointmentService, private router:Router){}

  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
      console.log(data);
      this.goToAppointment();
    })
  }

  onSubmit(){
    this.saveAppointment();

  }
  goToAppointment(){
    this.router.navigate(['/appointmentlist'])
  }

}
