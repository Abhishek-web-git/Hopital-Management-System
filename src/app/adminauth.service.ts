import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username=="abhishek"&&password=="12345"){
      sessionStorage.setItem('username',username);
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("User Login Successfully")
    let user= sessionStorage.getItem('username')
    return !(user==null)
  }

  logout(){
    console.log("User logout Successfully")
    sessionStorage.removeItem('username')
  }
}
