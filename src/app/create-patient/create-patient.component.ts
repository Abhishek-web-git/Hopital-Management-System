import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {
  patient:Patient=new Patient();

  constructor(private patientService:PatientService,private router:Router){

  }
  savepatient(){
    this.patientService.createPatient(this.patient).subscribe(data=>{
      console.log(data);
      this.goToPatientList();
    })
  }

  onSubmit(){
    this.savepatient();
  }
  goToPatientList(){
    this.router.navigate(['/docdash'])
  }


}
