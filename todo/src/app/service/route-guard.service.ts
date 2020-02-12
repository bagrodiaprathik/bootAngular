import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HAuthenticationService } from './h-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hauthenticationService:HAuthenticationService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    

    if(this.hauthenticationService.isUserLoggedIn()){
     
      return true;
    }
    else{
      this.router.navigate(['login'])
      return false;
    }
  }

}
