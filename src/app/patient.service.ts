import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  deletePatient(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:8080/api/v1"

  getPatientList():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`)
  }
}
