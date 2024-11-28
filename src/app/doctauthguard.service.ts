import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { DocauthService } from './docauth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctauthguardService implements CanActivate{

  constructor(private docauthService:DocauthService,private roter:Router) { }

  canActivate() {

    if(this.docauthService.isUserLoggedIn()){
      return true;
    }else{
      this.roter.navigate(['doclogin'])
      return false;
    }
      
  }
}
