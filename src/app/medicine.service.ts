import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:8080/api/v3/medicines"

  getMedicines():Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}`);
  }

  createMedicine(medicine:Medicine):Observable<Medicine>{
    return this.httpClient.post<Medicine>(`${this.baseUrl}`,medicine);
  }

  getMedicineById(id:number):Observable<Medicine>{
    return this.httpClient.get<Medicine>(`${this.baseUrl}/${id}`);
  }
  updateMedicine(id:number,medicine:Medicine):Observable<object>{
    return this.httpClient.put<Medicine>(`${this.baseUrl}/${id}`,medicine);
  }
  delete(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);

  }
}
