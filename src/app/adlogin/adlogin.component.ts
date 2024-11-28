import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrl: './adlogin.component.css'
})
export class AdloginComponent {

  username:string='';
  password:string='';

  inValidLogin=false;
  constructor(private router:Router, private AdminAuthservice:AdminauthService){}

  checkLogin(){
    if(this.AdminAuthservice.authenticate(this.username,this.password)){
      this.router.navigate(['admin'])
      this.inValidLogin=false;

    }
    else{
      this.inValidLogin=true;

      alert("Wrong Credintials")
      this.router.navigate(['home'])
      
    }
    
  }



 

  

}
