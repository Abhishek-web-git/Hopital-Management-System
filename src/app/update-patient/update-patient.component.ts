import { Component } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {
patient:Patient=new Patient();

onSubmit(){

  }

}
