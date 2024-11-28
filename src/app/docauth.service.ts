import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username=="abhi"&&password=="abhi123"){
      sessionStorage.setItem('username',username);
      return true;
    }else{
      return false;
    }
  }
  isUserLoggedIn(){
    console.log("Doctor login successfully")
    let user= sessionStorage.getItem('username');
    return !(user==null)
  }

  logout(){
    console.log("Doctor logout successfully")

    sessionStorage.removeItem('username');
  }
}
