import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HAuthenticationService {

  constructor() { }

  authentication(username, password){
    if(username==='test' && password==='dummy'){
      sessionStorage.setItem("authenticatedUser", username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticatedUser")
    return !(user === null)
  }
}
