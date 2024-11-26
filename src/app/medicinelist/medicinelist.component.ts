import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrl: './medicinelist.component.css'
})
export class MedicinelistComponent {

medicines:Medicine[]=[];
  constructor(private medicineService:MedicineService, private router:Router){

  }
  ngOnInit():void{
    this.getMedicine();
  }

  getMedicine(){
    this.medicineService.getMedicines().subscribe(data=> {
      this.medicines=data;

    })
  }

  update(id:number){
    this.router.navigate(['update-medicine',id])

  }

  delete(id:number){

    this.medicineService.delete(id).subscribe(data=>{
      console.log(data);
      this.getMedicine();
    })

  }

}
